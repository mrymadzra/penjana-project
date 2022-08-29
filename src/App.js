import './App.css';
import './index.css';
import React from 'react';
//import {Landing} from './component/landingpage';
import useNavigate from 'react-dom'

function App() {

  let navigate = useNavigate();

  return (
    <div className=''>
      <p className='font-bold text-3xl text-center'>project Penjana</p>
      <p>HELOOO</p>
      <button className='border-2' onClick={navigate('landing')}>Go to landing page</button>
    </div>
  );
}

export default App;
