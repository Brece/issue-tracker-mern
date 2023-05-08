import { cleanEnv } from 'envalid';
import { str, port } from 'envalid/dist/validators.js';
import env from './env.js';

export default cleanEnv(env, {
    MONGODB_URI: str(),
    PORT: port(),
});
