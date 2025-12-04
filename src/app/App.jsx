import Sidebar from "../pages/sidebar";
import Homepage from "../pages/homepage";
import Profil from "../pages/profil";
import Portfolio from "../pages/portfolio";
import Experiences from "../pages/experiences";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import fetchApi from "../functions/fetchApi";
import { useEffect, useState } from "react";
import Loader from "../components/loader";

function App() {
  const [data, setData] = useState({
    profil: null,
    works: null,
    state: false,
    institutions: null,
    skills: null,
  });
  const [loadingState, setLoadingState] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let currentLoadingState = 0;
    let profil = await fetchApi("profils");
    currentLoadingState++;
    setLoadingState(currentLoadingState);
    let works = await fetchApi("works");
    currentLoadingState++;
    setLoadingState(currentLoadingState);
    let skills = await fetchApi("skills");
    currentLoadingState++;
    setLoadingState(currentLoadingState);
    let institutions = await fetchApi("institutions");
    currentLoadingState++;
    setLoadingState(currentLoadingState);

    currentLoadingState++;
    setLoadingState(currentLoadingState);
    setTimeout(() => {
      setData({
        profil: profil["hydra:member"][0],
        works: works["hydra:member"],
        skills: skills["hydra:member"],
        institutions: institutions["hydra:member"],
        state: true,
      });
    }, 1000);
  }

  return (
    <>
      {data.state ? (
        <div
          onLoad={(e) => e.currentTarget.classList.add("loaded")}
          className={`App`}
        >
          <Sidebar profil={data.profil} key="103" />
          <div className="box">
            <Homepage profil={data.profil} key="1" />
            <Profil profil={data.profil} />
            <Portfolio works={data.works} key="3" />
            <Experiences
              skills={data.skills}
              institutions={data.institutions}
              key="5"
            />
            <Contact profil={data.profil} key="8" />
            <Footer key="11" />
          </div>
        </div>
      ) : (
        <Loader loadingState={loadingState} dataLength={6} />
      )}
    </>
  );
}

export default App;
