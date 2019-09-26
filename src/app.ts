import express,{ Application,Request,Response,NextFunction } from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './Routes';
import Connect from './connect';

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req:Request,res : Response ) => {

    res.send('TS App is Running')
})

const PORT = process.env.PORT;
const db = 'mongodb://localhost:27017/test';


Connect({ db });
Routes({ app })

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})