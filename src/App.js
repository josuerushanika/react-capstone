import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import NavbarDetail from './component/NavbarDetail';
import Home from './component/Homepage'
import {fetchSummary} from './redux/DetailsSlice/DetailsSlice'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(fetchSummary())

  },[dispatch])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="details/" element={<Detailpage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
