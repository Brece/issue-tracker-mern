import { BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Task(props) {
    return (
        <div className={`status-${props.task.status.toLowerCase()} my-3 py-2 px-3 border border-secondary rounded-md`}>
            <div className='flex flex-row justify-between font-semibold'>
                <h3 className='mb-2'>
                    { props.task.title }
                </h3>
                <p>{ props.task.status }</p>
            </div>
            <p className='mb-1'>{ props.task.text }</p>
            <div className='flex flex-row justify-between items-center'>
                <button className='py-1 px-3 bg-white text-primary rounded-md'>
                    <Link to={`/tasks/${props.task._id}`}>
                        <BiPencil size={20} />
                    </Link>
                </button>
                <div className='flex flex-col items-end text-xs text-neutral-500'>
                    <p>Create on { props.task.createdAt }</p>
                    <p>Updated on { props.task.updatedAt }</p>
                </div>
            </div>
            <p>{ props.task.assigned }</p>
            <p>{ props.task?.userId }</p>
        </div>
    );
}

export default Task;