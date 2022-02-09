const jwt = require('jsonwebtoken')
const mysql = require('mysql2/promise')
const connData = require('../database/pet-clinic-db')
const auth = async (req, res, next) => {
  try {
    // checking the token comming from the client's browser if valid or not
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, 'petappr&r')

    // checking the connection to the database
    try {
      const conn = await mysql.createConnection(connData)
      const [users, fields] = await conn.execute('SELECT u.id, u.username, u.email, u.user_type, u.personal_info_id, u.status, u.stmem_type, p.first_name, p.last_name, p.address, p.phone_number, p.photo  FROM users u INNER JOIN personal_info p ON u.personal_info_id = p.id WHERE u.id = ?', [data.payload])

      // if the user has a valid token but the payload of the token doesn't match the data base
      if (!users.length) {
        await conn.end()
        return res.status(401).send({ error: 'please Authanticate '})
      }

       
      const [user_token, fields2] = await conn.execute('SELECT * FROM user_tokens WHERE token = ? AND user_id = ? ', [token, data.payload])

      // if the user exists in the database but their token was removed from the user_tokens table due to logout 
      if (!user_token.length) {
        await conn.end()
        return res.status(401).send({error: 'please Authanticate'})
      }
      req.user = users[0]
      req.token = token

      await conn.end()
      next()

    } catch (e) {

      await conn.end()
      res.status(500).send({ error: e.message })
    }

    // if verifying the token failed
  } catch (e) {
    res.status(401).send({ error: 'Please Authanticate' })
  }
  
}

module.exports = auth