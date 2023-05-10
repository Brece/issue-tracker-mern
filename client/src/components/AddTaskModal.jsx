import * as TasksApi from '../api/tasksApi';
import { GrClose } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import TextInputField from './form/TextInputField';

function AddTaskModal({
    taskToEdit,
    onDismiss,
    onTaskSaved,
    users
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
            title: taskToEdit?.title || '',
            text: taskToEdit?.text || '',
            status: taskToEdit?.status || 'TODO',
            userId: taskToEdit?.userId?._id || '',
        }
    });

    const onSubmit = async (input) => {
        try {
            let taskResponse;

            // re-use AddTaskModal for add and update
            if (taskToEdit) {
                taskResponse = await TasksApi.updateTask(taskToEdit._id, input);
            } else {
                taskResponse = await TasksApi.createTask(input);
            }
            onTaskSaved(taskResponse);
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
                        { taskToEdit ? 'Edit Task' : 'Add Task' }
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
                            name='title'
                            label='Title'
                            placeholder='Title'
                            type='text'
                            register={ register }
                            registerOptions={{ required: 'Required' }}
                            error={ errors.title }
                        />

                        <div className='flex flex-col mb-3'>
                            <label htmlFor='text' className='mb-2'>Description</label>
                            <textarea
                                name='text'
                                id='text'
                                rows='5'
                                placeholder='Please add a task description...'
                                className='mb-3 py-1 px-1 border-neutral-400 border rounded-md focus:border-primary focus:outline-none'
                                { ...register('text', { required: 'Required' })}
                            ></textarea>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label htmlFor='status' className='mb-2'>Task Status</label>
                            <select
                                name='status'
                                id='status'
                                size='0'
                                className='py-1 px-1 rounded-md'
                                { ...register('status', { required: 'Required' })}
                                defaultValue='TODO'
                            >
                                <option>--Please choose an option--</option>
                                <option value='TODO'>To Do</option>
                                <option value='INPROGRESS'>In Progress</option>
                                <option value='ONHOLD'>On Hold</option>
                                <option value='DONE'>Done</option>
                            </select>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label htmlFor='userId' className='mb-2'>Assign task to:</label>
                            <select
                                name='userId'
                                id='userId'
                                size='0'
                                className='py-1 px-1 rounded-md'
                                { ...register('userId', { required: false })}
                                defaultValue={ taskToEdit?.userId?._id || '' }
                            >
                                <option value=''>--Not assigned--</option>
                                { users.map((user) => (
                                    <option value={ user._id } key={ user._id }>{ user.firstname } { user.lastname }</option>
                                )) }
                            </select>
                        </div>
                        
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

export default AddTaskModal;
