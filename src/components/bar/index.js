import './style.css'

const Bar = ( props ) => {
    const barHeight = parseInt(props.height) * 0.05;
return (
    <div className='bar-wrapper'>
        <div className='bar-items'>
    <div className={`custom-bar ${props.className}`} style={{height: `${barHeight}px`}}>
        <div className='bar-title'>{props.title}</div>
    </div>
    <div className='bar-label' style={{top: `calc(-${barHeight}px + 20px)`}}>₹ {props.height}</div>
    </div>
    </div>
)
}

export default Bar;