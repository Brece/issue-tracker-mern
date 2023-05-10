export async function fetchData(input, init) {
    const response = await fetch(input, init);

    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        throw Error(errorMessage);
    }
}

// using normal fetch function because we don't want anything returned, the HomePage component refreshes the page after restoring
export async function restoreData() {
    try {
        await fetch('/api/restore', { method: 'GET' });
    } catch (error) {
        throw Error(error)
    }
}
