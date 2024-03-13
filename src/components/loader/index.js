import { loader } from '../../assets/img';

const Loader = (props) =>{
    return (
        <div className="loader">
            <div className='loader-div'>
                <img src={loader}></img>
                <div class="progress-bar">
                    <div class="progress" style={{width:`${props.loadingState * 100 / props.dataLength}%`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;