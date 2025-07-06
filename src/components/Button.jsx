const Button = ({onClick}) => {
    return(
        <button
            onClick={onClick}
            className="bg-[#4F46E5] hover:bg-blue-600 cursor-pointer text-white font-medium py-2 px-4 rounded-[6px]">
            Add to cart
        </button>
    )
}

export default Button;