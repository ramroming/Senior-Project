const bcrypt = require('bcrypt')
const mysql = require('mysql2/promise')
const sharp = require('sharp')

const connData = require('../database/pet-clinic-db')
const myValidator = require('../utils/dataValidator')
const { findUserByCredentials, generateAuthToken } = require('../utils/authOperations')

const signup = async (req, res) => {
  const { first_name, last_name, address, phone_number, username, email, password, user_type, stmem_type } = req.body





  // to keep track of the id's of the inserted rows
  let userID, personalInfoId

  // this try is to check database connection errors
  try {


    // establishing the connection
    const conn = await mysql.createConnection(connData)

    // this try is to detected database violations and other errors when creating new user
    try {
      // inserting data into personal_info table
      const [personal_info, fields1] = await conn.execute('INSERT INTO personal_info (first_name, last_name, address, phone_number) VALUES (?, ?, ?, ?)', [
        first_name ? first_name : null,
        last_name ? last_name : null,
        address ? address : null,
        phone_number ? phone_number : null])
      personalInfoId = personal_info.insertId

      // inserting photo should be done here


      // hashing password before adding it to the database
      const hashedPassword = await bcrypt.hash(password, 8)


      // inserting data into users table all clients by default
      const [user, fields2] = await conn.execute('INSERT INTO users (username, email, password, user_type, stmem_type, personal_info_id) VALUES (?, ?, ?, ?, ?, ?)', [
        username ? username : null,
        email ? email : null,
        password ? hashedPassword : null,
        user_type ? user_type : 'client',
        stmem_type ? stmem_type : null,
        personalInfoId
      ])
      userID = user.insertId

      await conn.end()

      // creating the JWT 
      const token = await generateAuthToken(userID)

      // if storing token to the database failed
      if (!token) {
        return res.status(500).send({ error: 'Couldnt save token to the database' })
      }

      // data to send back when signup
      const userData = {
        id: userID,
        username: username ? username : null,
        email: email ? email : null,
        user_type: user_type ? user_type : 'client',
        stmem_type: stmem_type ? stmem_type : null,
        personal_info_id: personalInfoId
      }

      res.status(201).send({ token, userData })
    } catch (e) {
      // incase of an error empty remove any inserted rows
      if (personalInfoId) {
        await conn.execute('delete from personal_info where id = ?', [personalInfoId])
      }
      if (userID) {
        await conn.execute('delete from users where id = ?', [userID])
      }
      await conn.end()

      // to check duplication error, this 1062 is an sql error code for duplication
      if (e.errno === 1062)
        return res.status(400).send({ error: 'UserName or Email already used!!' })
      res.status(400).send({ error: e.message })
    }

  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const login = async (req, res) => {
  try {
    const conn = await mysql.createConnection(connData)

    try {
      const user = await findUserByCredentials(conn, req.body.username, req.body.password)
      const token = await generateAuthToken(user.id)
      // if saving token to database failed
      if (!token) {
        return res.status(500).send({ error: 'couldnt save token to database' })
      }
      res.status(200).send({ user, token })
    } catch (e) {
      await conn.end()
      res.status(400).send({ error: e.message })
    }

  }
  catch (e) {
    res.status(500).send({ error: e.message })
  }
}


// read user's profile
const myProfile = async (req, res) => {
  res.send(req.user)
}

// logout user
const logout = async (req, res) => {
  res.status(200).send()
}

const registerPet = async (req, res) => {
  
  // this try is to detect database connection errors
  try {

    // this try is to detected database violations and other errors when creating new pet
    const conn = await mysql.createConnection(connData)
    try {
      const [rows1, fields1] = await conn.execute('SELECT * FROM pets WHERE owner_id = ?', [req.user.id])
      if (rows1.length >= 5) {
        conn.end()
        return res.status(403).send({ error: 'Max pet per user reached!' })
      }
      const { name, gender, birth_date, breed_name, photo } = req.body
      const [rows2, fields2] = await conn.execute('INSERT INTO pets (name, gender, birth_date, breed_name, photo, owner_id) VALUES (?, ?, ?, ?, ?, ?)', [
        name ? name : null,
        gender ? gender : null,
        birth_date ? birth_date : null,
        breed_name ? breed_name : null,
        photo ? photo : null,
        req.user.id
      ])

      // data to send back when registering a pet
      const petData = {
        id: rows2.insertId,
        name: name ? name : null,
        gender: gender ? gender : null,
        birth_date: birth_date ? birth_date : null,
        photo: photo ? photo : null,
        owner_id: req.user.id
      }

      res.status(201).send(petData)
    } catch (e) {
      conn.end()
      return res.status.send({ error: e.message })
    }

  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const uploadPetImage = async (req, res) => {
  const pet_image = req.file.buffer
  const pet_id = req.params.pet_id
  const ownerId = req.user.id
  if (!pet_id || isNaN(pet_id) || pet_id < 0)
    return res.status(400).send({ error: 'Bad URL!' })

  // testing connection to databse
  try {
    const conn = await mysql.createConnection(connData)

    // this try is to check database violations when changing the photo of a pet
    try {
      const resizedImage = await sharp(pet_image).resize({ width: 350, height: 350}).png().toBuffer()

      const [result] = await conn.execute('UPDATE pets SET photo=? WHERE id=? AND owner_id = ?', [resizedImage, pet_id, ownerId])
      conn.end()
      if(result.affectedRows === 0)
        return res.status(404).send()
      
      res.send()
    } catch (e) {
      conn.end()
      res.status(400).send({ error: e.message })
    }
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}


module.exports = {
  signup,
  myProfile,
  login,
  logout,
  registerPet,
  uploadPetImage
}