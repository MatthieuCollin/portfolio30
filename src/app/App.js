import Sidebar from '../components/sidebar';
import Homepage from '../components/homepage';
import Profil from '../components/profil';
import Portfolio from '../components/portfolio';
import Experiences from '../components/experiences';
import Contact from '../components/contact';
import Footer from '../components/footer';

function App() {

  return (
    <div className="App">
      <Sidebar />
      <div className="box">
        <Homepage/>
        <Profil />
        <Portfolio/>
        <Experiences />
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
