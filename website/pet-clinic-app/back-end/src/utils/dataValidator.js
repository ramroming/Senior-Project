import validator from 'validator'
import { createConnection } from 'mysql2/promise'
import connData from '../database/pet-clinic-db.js'
import petClinicRules from './petclinicrules.js'
import timeOperations from './timeOperations.js'

const { CLINIC_TIME_ZONE_OFFSET, CLINIC_WORKING_HOURS } = petClinicRules
const { isMobilePhone, isEmail, isStrongPassword, isDate } = validator
const { calculatePetAge } = timeOperations
const myValidator = {

  
  // shared validation
  isLongData(data) {
    return data.length > 40
  },
  isTooLong(data) {
    return data.length > 200
  },
  is2TooLong(data) {
    return data.length > 400
  },
  isValidId(id) {
    return !(isNaN(id) || id <= 0)
  },


  // user related validations
  isUserType(type) {
    return  !(type !== 'client' && type !=='stmem')
  },
  isStmemType(stmem_type) {
    
    return (['trainer', 'groomer', 'vet', 'receptionist', 'admin'].includes(stmem_type))
  },
  isPhoneNumber(phone_number) {
    return isMobilePhone(phone_number)
  },
  isValidEmail(email) {
    return isEmail(email)
  },
  isGoodPassword(password) {
    if (!password)
      return true
    return isStrongPassword(password)
  },
  isLongPassword(password) {
    return password.length > 128
  },
  // this will check if a pet belongs to a user and will return all data about the pet
  async isOwnerPet(userId, pet_id) {
    try {
      const conn = await createConnection(connData)
      const [rows, fields] = await conn.execute(`SELECT p.name As pet_name, p.gender, p.birth_date, p.breed_name, GROUP_CONCAT(c.name) As colors, p.photo  FROM pets p
      JOIN color_records cr ON cr.pet_id = p.id
      JOIN colors c ON cr.color_id = c.id
      WHERE p.owner_id = ? AND p.id = ?
      group by p.name, p.gender, p.birth_date, p.breed_name, p.photo`, [userId, pet_id])
      await conn.end()

      // if a user dosen't own the pet 
      if (!rows.length)
        return false
      
      rows[0].birth_date = calculatePetAge(rows[0].birth_date)
      
      // if the user owns the pet
      return rows[0]

    }  catch(e) {
      throw e
    }
  },

  // pet related validations
  isValidGender(gender) {
    return (gender === 'male' || gender === 'female')
  },
  // check if the the date is a valid date and is in the past
  isValidBirthDate(date) {
    return (isDate(date, { format: 'YYYY-MM-DD', strictMode: true, delimiters: ['-']}) )
  },
  isValidPetType(pet_type) {
    return (['cat', 'bird', 'dog'].includes(pet_type))
  },

  async isValidBreed(breed_name, pet_type) {
    try {
      const conn = await createConnection(connData)
      const [rows, fields] = await conn.execute('SELECT * FROM breeds WHERE name = ? AND type_name = ?', [breed_name, pet_type])
      await conn.end()

      // if the pet_type and the breeds are invalid 
      if (rows.length === 0)
        return false
      
      
      // if the pet_type and the breeds are valid 
      return true

    }  catch(e) {
      throw e
    }
  },
  // blue, red, jweoifjew
  async isValidColors(colors) { 
    if (colors === '') 
      return false
    const colorsArr = colors.split(':')
    if (colorsArr.length > 3)
      return false
    const colorWithId = []
    try {
      const conn = await createConnection(connData)
      for (let i = 0; i < colorsArr.length; i++ ){
        const [result] = await conn.execute('SELECT * FROM colors WHERE name = ?', [colorsArr[i]])
        if (result.length === 0){
          conn.end()
          return { valid: false }
        }
        colorWithId.push({
          id: result[0].id,
          name: result[0].name
        })
      }
      conn.end()
      
      return { valid: true, colorWithId}
    } catch (e) {
      throw e
    }
  },

  // Appointment related validations

  async isValidAppointmentType(appointment_type) {
    try {
      const conn = await createConnection(connData)
      const [rows, fields] = await conn.execute('SELECT * FROM appointment_types WHERE name = ?', [appointment_type])
      await conn.end()

      // if the appointment_type is invalid 
      if (rows.length === 0)
        return false
      
      
      // if the appointment_type is valid  
      return rows[0].id

    }  catch(e) {
      throw e
    }
  },
  isValidAppStmem(appointment_type, stmem_id) {
    
  },
  isValidAppointmentDate(date) {

    return (isDate(date, { format: 'YYYY-MM-DD', strictMode: true, delimiters: ['-']}) && (new Date(date).setUTCHours(23) >= new Date()))
  },
  isValidHour(hour) {
    return (!isNaN(hour) && CLINIC_WORKING_HOURS.includes(hour))
  },

  // adoption realted validations
  async isValidRequestAdoptionAd(userId, adoptionId) {
    try {
      // check that is user requesting an already existing ad that doesn't belong to him
      const conn = await createConnection(connData)
      const [result] = await conn.execute('SELECT id from adoption_ads WHERE client_id != ? AND id=? AND status = 1', [userId, adoptionId])
      await conn.end()
      if (!result.length  )
        return false
      return true
    } catch(e) {
      throw e
    }
  },
  async nonExistentRequest(userId, adoptionId) {
    try {
      // check if the user has already requested the adoption ad
      const conn = await createConnection(connData)

      const [result2] = await conn.execute('SELECT date FROM adoption_requests WHERE client_id = ? AND adoption_ad_id = ? AND status="pending"', [userId, adoptionId])
      await conn.end()
      if (result2.length)
        return true

      return false
    } catch(e) {
      throw e
    }
  },
  async petInAdoptionAd(petId, adoptionAdId, clientId) {
    try {
      const conn = await createConnection(connData)
      const [result] = await conn.execute('SELECT id FROM adoption_ads WHERE status = 1 AND id = ? AND pet_id = ? AND client_id = ?', [adoptionAdId, petId, clientId])
      await conn.end()
      if (!result.length)
        return false

      return true
    } catch (e) {
      throw e
    }
  }
  // async isMyRequest(userId, requestId) {
  //   try {
  //     const conn = await createConnection(connData)
  //     const [result] = await conn.execute('SELECT date FROM adoption_requests WHERE client_id = ? AND adoption_ad_id = ?', [req.user.id, requestId])
  //     await conn.end()

  //   } catch (e) {
  //     throw e
  //   }
  // }
  



}

export default myValidator