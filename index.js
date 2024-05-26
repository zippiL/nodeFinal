import express from 'express' 
import cors from "cors"
import bodyParser from "body-parser"
import LinksRouter from "./Routers/linkRouter.js"
import UsersRouter from "./Routers/userRouter.js"
import connectDB from './DB/mongoConnect.js'



connectDB();
const app = express()
const port = 3000;
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
app.use('/user', UsersRouter);
app.use('/link', LinksRouter);


  