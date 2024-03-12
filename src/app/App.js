import Sidebar from '../components/sidebar';
import Homepage from '../components/homepage';
import Profil from '../components/profil';
import Portfolio from '../components/portfolio';
import Experiences from '../components/experiences';
import Contact from '../components/contact';
import Footer from '../components/footer';
import fetchApi from '../functions/fetchApi';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({profil: null, state: null});

    useEffect(()=>{
        getData();
    },[])
    
    async function getData(){
        let fetch = await fetchApi("profils");

        setData({
          profil: fetch["hydra:member"][0],
          state:true
        });
    };

    
    
  return (
    <>
    {data.state ?  <div className="App">
    <Sidebar key="103"/>
    <div className="box">
      <Homepage profil={data.profil} key="1"/>
      <Profil profil={data.profil}/>
      <Portfolio key="3"/>
      <Experiences key="5" />
      <Contact profil={data.profil} key="8"/>
      <Footer key="11"/>
    </div>
  </div> :<></>}
  </>

  );
}

export default App;
