function Button(props) {
    return (
        <button className={`${props.backgroundColor} mr-3 py-2 px-3 text-center text-white font-semibold rounded-md`}>
            { props.label }
        </button>
    );
}

export default Button;