interface buttonInterface {
     buttonTxt: string
}

function Button({ buttonTxt } : buttonInterface ){
    <button>
        {buttonTxt}
    </button>
}

export default Button