import { BiPencil } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';

function User({
    user,
    onUserClicked,
    onDeleteUserClicked,
}) {
    const {
        firstname,
        lastname,
        _id,
    } = user;

    return (
        <div className='flex flex-row justify-between mb-3 py-2 px-3 border border-secondary cursor-pointer font-semibold bg-neutral-200 rounded-md hover:border-primary'>
            <p>{ firstname} { lastname }</p>
            <div className='flex flex-row'>
                <button
                    className='py-1 px-3 bg-white text-primary rounded-md mr-1'
                    onClick={ () => onUserClicked(user) }
                >
                    <BiPencil size={20} />
                </button>
                <button
                    className='py-1 px-3 bg-white text-primary rounded-md'
                    onClick={ () => onDeleteUserClicked(user) }
                >
                    <FiTrash size={20} />
                </button>
            </div>
        </div>
    );
}

export default User;
