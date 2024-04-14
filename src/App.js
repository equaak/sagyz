import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout back='white'/>}>
        <Route index element={<Home />}/>
      </Route>
      <Route>
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
