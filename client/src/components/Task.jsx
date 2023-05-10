import { BiPencil } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';
import { DateTime } from 'luxon';

function Task({
    task,
    users,
    onEditTaskClicked,
    onDeleteTaskClicked,
}) {
    const {
        title,
        text,
        status,
        userId,
        createdAt,
        updatedAt,
    } = task;

    // type check neccessary after an edit, userId object comes back as a string in the response body
    // on a fresh request the userId is an object
    const getUserName = (reference) => {
        if (typeof reference === 'string') {
            const assignedUser = users.find((user) => user._id === reference);
            return assignedUser ? `${ assignedUser.firstname } ${ assignedUser.lastname }` : 'Unassigned';
        }
        return `${ reference.firstname } ${ reference.lastname }`;
    }

    return (
        <div className={`status-${ status.toLowerCase() } my-3 py-2 px-3 border border-secondary rounded-md`}>
            <div className='flex flex-row justify-between font-semibold'>
                <h3 className='mb-2'>
                    { title }
                </h3>
                <div className='text-end'>
                    <p>{ status }</p>
                    <p className={`text-sm ${ userId ? 'text-secondary' : 'text-primary' }`}>
                        { userId ? getUserName(userId) : 'Unassigned'}
                    </p>
                </div>
            </div>
            <p className='mb-1'>{ text }</p>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row'>
                    <button
                        className='py-1 px-3 bg-white text-primary rounded-md mr-1'
                        onClick={ () => onEditTaskClicked(task) }
                    >
                        <BiPencil size={20} />
                    </button>
                    <button
                        className='py-1 px-3 bg-white text-primary rounded-md'
                        onClick={ () => onDeleteTaskClicked(task) }
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
                <div className='flex flex-col items-end text-xs text-neutral-500'>
                    <p>Create on { DateTime.fromJSDate(new Date(createdAt)).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) }</p>
                    <p>Updated on { DateTime.fromJSDate(new Date(updatedAt)).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) }</p>
                </div>
            </div>
        </div>
    );
}

export default Task;