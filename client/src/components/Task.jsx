import { BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

function Task({ task }) {
    const {
        title,
        text,
        status,
        assigned,
        userId,
        _id,
        createdAt,
        updatedAt,
    } = task;

    return (
        <div className={`status-${ status.toLowerCase() } my-3 py-2 px-3 border border-secondary rounded-md`}>
            <div className='flex flex-row justify-between font-semibold'>
                <h3 className='mb-2'>
                    { title }
                </h3>
                <div className='text-end'>
                    <p>{ status }</p>
                    <p className={`text-sm ${ assigned ? 'text-secondary' : 'text-primary' }`}>
                        { assigned ? `${ userId?.firstname } ${ userId?.lastname }` : 'Unassigned'}
                    </p>
                </div>
            </div>
            <p className='mb-1'>{ text }</p>
            <div className='flex flex-row justify-between items-center'>
                <button className='py-1 px-3 bg-white text-primary rounded-md'>
                    <Link to={`/tasks/${ _id }`}>
                        <BiPencil size={20} />
                    </Link>
                </button>
                <div className='flex flex-col items-end text-xs text-neutral-500'>
                    <p>Create on { DateTime.fromJSDate(new Date(createdAt)).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) }</p>
                    <p>Updated on { DateTime.fromJSDate(new Date(updatedAt)).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) }</p>
                </div>
            </div>
        </div>
    );
}

export default Task;