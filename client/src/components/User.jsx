function User({
    user,
    onUserClicked,
    onDeleteUserClicked,
}) {
    const {
        firstname,
        lastname
    } = user;
    
    return (
        <div className='mb-3 py-2 px-3 border border-secondary cursor-pointer font-semibold bg-neutral-200 rounded-md hover:border-primary'>
            <p>{ firstname} { lastname }</p>
        </div>
    );
}

export default User;
