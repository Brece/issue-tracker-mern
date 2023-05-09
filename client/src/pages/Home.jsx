import { useEffect, useState } from 'react';
import * as TasksApi from '../api/tasksApi';
import * as UsersApi from '../api/usersApi';
import Task from '../components/Task';
import User from '../components/User';
import Button from '../components/Button';
import FilterOptions from '../components/FilterOptions';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [showLoadingError, setShowLoadingError] = useState(false);

    // TODO: filter option and selected user update filteredTask
    const [selectedUser, setSelectedUser] = useState('');
    const [filterOption, setFilterOption] = useState('ALL');

    const handleFilterOption = (option) => {
        // TODO: use case switch for 'all', 'unassigned' and rest
        setFilterOption(option);
        let updatedTasks = [];

        switch (option) {
            case 'ALL':
                setFilteredTasks(tasks);
                break;
            case 'UNASSIGNED':
                updatedTasks = tasks.filter((task) => task.assigned === false)
                setFilteredTasks(updatedTasks);
                break;
            default:
                updatedTasks = tasks.filter((task) => task.status === option)
                setFilteredTasks(updatedTasks);
                break;
        }
    }

    // TODO: test with assigned tasks
    const handleSelectedUser = (userId) => {
        const updatedTasks = tasks.filter((task) => task.userId === userId);
        setSelectedUser(userId);
        setFilteredTasks(updatedTasks);
    }

    const toggleAddUserModal = () => {

    }

    const toggleAddTaskModal = () => {

    }

    useEffect(() => {
        async function fetchData() {
            try {
                setShowLoadingError(false);
                setIsLoading(true);

                const users = await UsersApi.fetchUsers();
                const tasks = await TasksApi.fetchTasks();

                setUsers(users);
                setTasks(tasks);
                setFilteredTasks(tasks);
            } catch (error) {
                console.log(error);
                setShowLoadingError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className='w-full mb-5'>
                <Button onClick={() => toggleAddUserModal()} label='Add User' backgroundColor='secondary-bg-color' />
                <Button onClick={() => toggleAddTaskModal()} label='Add Task' backgroundColor='secondary-bg-color' />
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full h-[30vh] md:h-screen overflow-y-auto md:w-72 md:pr-6'>
                    {users.map(( user ) => (
                        <User user={ user } key={ user._id } />
                    ))}
                </div>
                <div className='w-full md:flex-1'>
                    <FilterOptions filterOption={ filterOption } handleFilterOption={ handleFilterOption } />
                    <div className='h-[60vh] md:h-screen overflow-y-auto'>
                        {filteredTasks.map(( task ) => (
                            <Task task={ task } key={ task._id } />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
