import NavContainer from './components/nav/NavContainer';
import { Routes, Route } from 'react-router-dom';
import LandingContainer from './components/landing/LandingContainer';
import { useEffect, useState } from 'react';
import FirstLoaderContainer from './components/firstLoader/FirstLoaderContainer';

function App() {
  const [firstLoader, setFirstLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFirstLoader(false)
    }, 3000);
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
          {/* <Route path="/contact" element={<ContactInfoContainer />} /> */}
          {/* <Route path="/projects" element={<ProjectsContainer />} /> */}
        </Routes>
      </main>
    );
  }
}

export default App;
