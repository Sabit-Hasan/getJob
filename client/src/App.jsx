import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import About from './pages/About/About';
import RegisterModal from './pages/Register/RegisterModal';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<RegisterModal />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
