import express,{ Application,Request,Response,NextFunction } from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './Routes';
import Connect from './connect';

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req:Request,res : Response ) => {

    res.send('TS App is Running Working')
})

const PORT = process.env.PORT || 4500;
const db = process.env.MONGO_URL || 'mongodb://mongo:27017/test';
console.log("process.env.MONGO_URL",db)
console.log("DSDSDSD",process.env.PORT)
Connect({ db });
Routes({ app })

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})