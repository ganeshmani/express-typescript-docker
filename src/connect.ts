import mongoose from 'mongoose';

type DBInput = {
    db : string;
}

export default({db} : DBInput) => {
    console.log("DB",db)    
    const connect = () => {
        mongoose
            .connect(db,{ useNewUrlParser : true,useUnifiedTopology : true })
            .then(() => {
                return console.info(`Successfully connected to ${db}`);
            })
            .catch((err) => {
                console.error(`Error connecting to database :`,err);

                return process.exit(1);
            })
    };

    connect();

    mongoose.connection.on('disconnected',connect);
}