import { fetchData } from './helperApi';

export async function fetchTasks() {
    const response = await fetchData('/api/tasks', { method: 'GET' });
    
    return response.json();
}

export async function fetchTask(taskId) {
    const response = await fetchData(`/api/tasks/${ taskId }`, { method: 'GET' });

    return response.json();
}

export async function createTask(task) {
    console.log('task', task);
    const response = await fetchData('/api/tasks',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    console.log(response);
    return response.json();
}

export async function updateTask(taskId, task) {
    const response = await fetchData(`/api/tasks/${ taskId }`,
    {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
}

export async function deleteTask(taskId) {
    await fetchData(`/api/tasks/${ taskId }`, { method: 'DELETE' });
}
