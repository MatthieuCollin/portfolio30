import './index.scss'

const Homepage = (props) =>{

    let data = props.profil;
    
    return(
        <div id='homepage' className="homepage">
            <div className='presentation'>
                <h1>{data.lastname} {data.firstname}</h1>
                <h2>{data.job}</h2>
            </div>
        </div>
    )
}

export default Homepage;