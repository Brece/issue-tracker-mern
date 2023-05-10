import * as UsersApi from '../api/usersApi';
import { GrClose } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import TextInputField from './form/TextInputField';

function AddUserModal({
    userToEdit,
    onDismiss,
    onUserSaved
}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm({
        defaultValues: {
            firstname: userToEdit?.firstname || '',
            lastname: userToEdit?.lastname || '',
        }
    });

    const onSubmit = async (input) => {
        try {
            let userResponse;

            // re-use AddUserModal for add and update
            if (userToEdit) {
                userResponse = await UsersApi.updateUser(userToEdit._id, input);
            } else {
                userResponse = await UsersApi.createUser(input);
            }
            onUserSaved(userResponse);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <div className='absolute z-10 left-0 right-0 top-0 bottom-0'>
            <div className='w-full h-full bg-neutral-200 opacity-70'></div>

            <div className='absolute z-20 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 w-5/6  md:w-[500px] py-3 px-3 rounded-md border bg-white'>
                <div className='flex flex-row justify-between mb-9'>
                    <h2>
                        { userToEdit ? 'Edit User' : 'Add User' }
                    </h2>
                    <button
                        type='button'
                        onClick={ onDismiss }
                    >
                        <GrClose size={25} />
                    </button>
                </div>
                <div>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <TextInputField
                            name='firstname'
                            label='Firstname'
                            placeholder='Firstname'
                            type='text'
                            register={ register }
                            registerOptions={{ required: 'Required' }}
                            error={ errors.title }
                        />
                        <TextInputField
                            name='lastname'
                            label='Lastname'
                            placeholder='Lastname'
                            type='text'
                            register={ register }
                            registerOptions={{ required: 'Required' }}
                            error={ errors.title }
                        />
                        <button
                            type='submit'
                            className='btn bg-primary'
                            disabled={ isSubmitting }
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUserModal;
