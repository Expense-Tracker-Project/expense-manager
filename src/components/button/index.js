import './style.css'

const Button = ( props ) => {
return (
    <button className={`custom-button ${props.className}`} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
)
}

export default Button;