import './style.css'

const Bar = ( props ) => {
    const barHeight = parseInt(props.height) * 0.05 < 100 ? parseInt(props.height) * 0.08 : parseInt(props.height) * 0.05;
return (
    <div className='bar-wrapper'>
        <div className='bar-items'>
    <div className={`custom-bar ${props.className}`} style={{height: `${barHeight}px`, minHeight: `${props.height === 0 ? '5px' : '20px'}`}}>
        <div className={`${props.height === 0 ? 'hide-bar-title' : 'bar-title'} ${(barHeight < 40 && props.height > 0) && 'sm-bar-title'}`}>{props.title}</div>
    </div>
    <div className='bar-label' style={{top: `${barHeight <= '40px' ? `calc(-${barHeight}px + 20px)` : '-20px'}`}}>₹ {props.height}</div>
    </div>
    </div>
)
}

export default Bar;