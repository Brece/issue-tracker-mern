import app from './app.js';
import env from './utils/validateEnv.js';
import mongoose from 'mongoose';

const port = env.PORT;
const mongoDB = env.MONGODB_URI;

mongoose.connect(mongoDB)
    .then((connection) => {
        console.log(
            `MongoDB connected: ${ connection.connection.host }`
        );
        
        app.listen(port, () => {
            console.log(`Server running on: http://localhost:${ port }`);
        });
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
