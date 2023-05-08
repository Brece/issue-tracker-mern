import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    firstname: { 
        type: String, 
        required: true, 
        maxLength: 30 
    },
    lastname: { 
        type: String, 
        required: true, 
        maxLength: 30 
    }
});

// virtual properties
UserSchema
    .virtual('fullname')
    .get(function() {
        return `${ this.firstname } ${ this.lastname }`;
    });

UserSchema
    .virtual('url')
    .get(function() {
        return `/users/${ this._id }`
    });

export default model('User', UserSchema);
