import { fetchData } from './helperApi';

export async function fetchUsers() {
    const response = await fetchData('/api/users', { method: 'GET' });

    return response.json();
}

export async function fetchUser(userId) {
    const response = await fetchData(`/api/users/${ userId }`, { method: 'GET' });

    return response.json();
}

export async function createUser(user) {
    const response = await fetchData('/api/users',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export async function updateUser(userId, user) {
    const response = await fetchData(`/api/users/${ userId }`,
    {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    return response.json();
}

export async function deleteUser(userId) {
    await fetchData(`/api/users/${ userId }`, { method: 'DELETE' });
}
