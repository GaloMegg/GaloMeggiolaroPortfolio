import NavContainer from './components/nav/NavContainer';
import { Routes, Route } from 'react-router-dom';
import LandingContainer from './components/landing/LandingContainer';
import { useEffect, useState } from 'react';
import FirstLoaderContainer from './components/firstLoader/FirstLoaderContainer';
import audioMp3 from './components/firstLoader/radiation-sound.mp3'
import AboutMeContainer from './components/aboutMe/AboutMeContainer';
function App() {
  const [firstLoader, setFirstLoader] = useState(true)
  useEffect(() => {
    const audio = new Audio(audioMp3)
    if (firstLoader) {
      audio.play()
    }
    setTimeout(() => {
      setFirstLoader(false)
      audio.pause()
    }, 6000);
  }, [])
  if (firstLoader) {
    return (
      <>

        <FirstLoaderContainer />
      </>
    )
  }
  else {
    return (
      <main className="App">
        <NavContainer />
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/aboutme" element={<AboutMeContainer />} />


          {/* <Route path="/contact" element={<ContactInfoContainer />} /> */}
          {/* <Route path="/projects" element={<ProjectsContainer />} /> */}
        </Routes>
      </main>
    );
  }
}

export default App;
