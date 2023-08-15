import './style.css'

const Bar = ( props ) => {
return (
    <div className={`custom-bar ${props.className}`} style={{height: props.height}}>{props.title}</div>
)
}

export default Bar;