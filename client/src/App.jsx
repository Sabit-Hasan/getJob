import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import About from './pages/About/About';
import Register from './pages/Register/Register';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
