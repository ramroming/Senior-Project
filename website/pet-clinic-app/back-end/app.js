// requiring express
import express, { json } from 'express'

import cors from 'cors'


// requiring the routers
import usersRouter from './src/routers/users.js'
import petsRouter from './src/routers/pets.js'
import appointmentRouter from './src/routers/appointment.js'
import adoptionRouter from './src/routers/adoption.js'
import receptionistRouter from './src/routers/receptionist.js'
import adminRouter from './src/routers/admin.js'
import vetRouter from './src/routers/vet.js'
import trainerRouter from './src/routers/trainer.js'


const app = express()

const PORT = process.env.PORT || 5000

// This will parse the incomming JSON data into javascript objects
app.use(json())

// this will fix the CORS Error
app.use(cors())
// app.use((req, res, next) => {
//   setTimeout(() => {
//     next()
//   }, 1000)
// })

// Using the Routers
app.use(usersRouter)
app.use(petsRouter)
app.use(appointmentRouter)
app.use(adoptionRouter)
app.use(receptionistRouter)
app.use(adminRouter)
app.use(vetRouter)
app.use(trainerRouter)

// not found url
app.use('/*', (req, res) => {
  res.send('404 Endpoint not found!!')
})

app.listen(PORT, () => {
  console.log('Connected successfully to PORT ', PORT)
})