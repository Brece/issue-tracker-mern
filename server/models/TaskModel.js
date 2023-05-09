import { Schema, model } from 'mongoose';
import { DateTime } from 'luxon';

const TaskSchema = new Schema({
        title: { 
            type: String, 
            required: true, 
            maxLength: 100,
        },
        text: { 
            type: String, 
            required: true, 
            maxLength: 500,
        },
        status: {
            type: String,
            enum: ['TODO', 'INPROGRESS', 'DONE', 'ONHOLD'],
            default: 'INPROGRESS',
        },
        assigned: {
            type: Boolean,
            default: false,
        },
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User',
        }
    },
    {
        timestamps: true,
    }
);

// virtual properties
TaskSchema
    .virtual('url')
    .get(function() {
        return `/tasks/${ this._id }`;
    });

TaskSchema
    .virtual('createdAt_formatted')
    .get(function() {
        return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    });

TaskSchema
    .virtual('updatedAt_formatted')
    .get(function() {
        return DateTime.fromJSDate(this.updatedAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    });

export default model('Task', TaskSchema);
