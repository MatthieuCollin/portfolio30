import Sidebar from '../pages/sidebar';
import Homepage from '../pages/homepage';
import Profil from '../pages/profil';
import Portfolio from '../pages/portfolio';
import Experiences from '../pages/experiences';
import Contact from '../pages/contact';
import Footer from '../pages/footer';
import fetchApi from '../functions/fetchApi';
import { useEffect, useState } from 'react';
import Loader from '../components/loader';

function App() {

  const [data, setData] = useState({profil: null,works: null, state: false});

    useEffect(()=>{
        getData();
    },[])
    
    async function getData(){
        let profil = await fetchApi("profils");
        let works = await fetchApi("works");

        setData({
          profil: profil["hydra:member"][0],
          works: works["hydra:member"],
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
      <Portfolio works={data.works} key="3"/>
      <Experiences key="5" />
      <Contact profil={data.profil} key="8"/>
      <Footer key="11"/>
    </div>
  </div> :<Loader />}
  </>

  );
}

export default App;
