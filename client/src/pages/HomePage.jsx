import { useEffect, useState } from 'react';
import * as TasksApi from '../api/tasksApi';
import * as UsersApi from '../api/usersApi';
import Task from '../components/Task';
import User from '../components/User';
import Button from '../components/Button';
import FilterOptions from '../components/FilterOptions';
import AddUserModal from '../components/AddUserModal';
import AddTaskModal from '../components/AddTaskModal';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    // TODO: add placeholder while fetching data
    const [isLoading, setIsLoading] = useState(true);
    const [showLoadingError, setShowLoadingError] = useState(false);

    const [userToEdit, setUserToEdit] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    // TODO: filter option and selected user update filteredTask
    const [selectedUser, setSelectedUser] = useState('');
    const [filterOption, setFilterOption] = useState('ALL');

    const handleFilterOption = (option) => {
        setFilterOption(option);
        let updatedTasks = [];

        switch (option) {
            case 'ALL':
                setFilteredTasks(tasks);
                break;
            case 'UNASSIGNED':
                updatedTasks = tasks.filter((task) => task.userId === null)
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

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
        setShowAddUserModal(false);
    }

    const editUser = (updatedUser) => {
        setUsers(users.map((existingUser) => existingUser._id === updatedUser._id ? updatedUser : existingUser));
        setUserToEdit(null);
    }

    const deleteUser = async (user) => {
        try {
            await UsersApi.deleteUser(user._id);
            const updatedUsers = users.filter((existingUser) => existingUser._id !== user._id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        setShowAddTaskModal(false);
    }

    const editTask = (updatedTask) => {
        const updatedTasks = tasks.map((existingTask) => existingTask._id === updatedTask._id ? updatedTask : existingTask);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        setTaskToEdit(null);
    }

    const deleteTask = async (task) => {
        try {
            await TasksApi.deleteTask(task._id);
            const updatedTasks = tasks.filter((existingTask) => existingTask._id !== task._id);
            setTasks(updatedTasks);
            setFilteredTasks(updatedTasks);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
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
                <Button onClick={() => setShowAddUserModal(true)} label='Add User' backgroundColor='secondary-bg-color' />
                <Button onClick={() => setShowAddTaskModal(true)} label='Add Task' backgroundColor='secondary-bg-color' />
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full h-[30vh] md:h-screen overflow-y-auto md:w-[350px] mb-8 md:mb-0 md:pr-6'>
                    {users.map(( user ) => (
                        <User
                            user={ user }
                            key={ user._id }
                            onEditUserClicked={ setUserToEdit }
                            onDeleteUserClicked={ deleteUser }
                        />
                    ))}
                </div>

                {/* passing down the users list because after an edit (re-assign task) the assigned userId becomes an ID "string" instead of an object in the frontend, with the list we can filter for the correct name to display instead of getting "undefined". A more zentralized way to handle state would be a better approach */}
                <div className='w-full md:flex-1'>
                    <FilterOptions filterOption={ filterOption } handleFilterOption={ handleFilterOption } />
                    <div className='h-[60vh] md:h-screen overflow-y-auto'>
                        {filteredTasks.map(( task ) => (
                            <Task
                                task={ task }
                                users={ users }
                                key={ task._id }
                                onEditTaskClicked={ setTaskToEdit }
                                onDeleteTaskClicked={ deleteTask }
                            />
                            ))}
                    </div>
                </div>
            </div>

            {/* re-useable User modal for adding and updating */}
            { showAddUserModal && (
                <AddUserModal
                    onDismiss={ () => setShowAddUserModal(false) }
                    onUserSaved={ addUser }
                />
            )}

            { userToEdit && (
                <AddUserModal
                    userToEdit={ userToEdit }
                    onDismiss={ () => setUserToEdit(null) }
                    onUserSaved={ editUser }
                />
            )}

            {/* re-useable Task modal for adding and updating */}
            { showAddTaskModal && 
                <AddTaskModal
                    users={ users }
                    onDismiss={ () => setShowAddTaskModal(null) }
                    onTaskSaved={ addTask }
                />
            }

            { taskToEdit && 
                <AddTaskModal
                    users={ users }
                    taskToEdit={ taskToEdit }
                    onDismiss={ () => setTaskToEdit(null) }
                    onTaskSaved={ editTask }
                />
            }
        </div>
    );
}

export default Home;
