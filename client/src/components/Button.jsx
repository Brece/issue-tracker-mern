function Button({
    onClick,
    backgroundColor,
    label,
}) {
    return (
        <button onClick={ onClick } className={`${backgroundColor} btn`}>
            { label }
        </button>
    );
}

export default Button;