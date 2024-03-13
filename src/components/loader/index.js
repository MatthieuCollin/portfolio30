import { loader } from '../../assets/img';
import './index.css'

const Loader = (props) =>{
    return (
        <div className="loader">
            <img src={loader}></img>
            <div class="progress-bar">
                <div class="progress" style={{width:`${props.loadingState * 100 / props.dataLength}%`}}></div>
            </div>
        </div>
    )
}

export default Loader;