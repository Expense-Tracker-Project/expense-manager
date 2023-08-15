import './style.css';
import Bar from '../bar';

const Graph = ( props ) => {
return (
    <div className='graph-wrapper'>
        {props?.data?.map((item, index) => <Bar height={item.expense} title={item.month} key={index} className={`bar-${index}`} />)}
    </div>
)
}

export default Graph;