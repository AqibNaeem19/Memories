import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://maqibnaeem2019:Mnaeem12345@memories.r4cdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.Port || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => app.listen(PORT, () => console.log(`Server started at port ${PORT}`)) )
  .catch( error => console.log(error.message))

// mongoose.set('useFindAndModify', false);