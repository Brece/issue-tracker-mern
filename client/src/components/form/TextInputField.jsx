function TextInputField({
    name,
    label,
    register,
    registerOptions,
    error,
    ...props
}) {
    return (
        <div className='flex flex-col mb-3'>
            <label htmlFor={ name } className='mb-2'>{ label }</label>
            <input
                id={ name }
                className='mb-3 py-1 px-1 border-neutral-400 border rounded-md focus:border-primary focus:outline-none'
                { ...props }
                { ...register(name, registerOptions)}
            />
            <p>{ error?.message }</p>
        </div>
    );
}

export default TextInputField;
