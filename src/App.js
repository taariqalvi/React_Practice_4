import './App.css';
import React from 'react';
import Create from './Create';
import { Route, Routes } from 'react-router-dom';
import ReadComponent from './ReadComponent';
import Edit from './Edit';


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='text-center text-info p-2 bg-dark'>Welcome to React</h1>
        <Routes>
          <Route exact path='/' element={<ReadComponent />}></Route>
          <Route exact path='/create' element={<Create />}></Route>
          <Route exact path='/edit' element={<Edit />}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
