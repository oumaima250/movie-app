import React from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ShowMovie from './components/ShowMovie';
import CreateMovie from './components/CreateMovie';

const App = () => {


  return (
   
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<ShowMovie />} />
          <Route path={"/CreateMovie"} element={<CreateMovie />} />
        </Routes>
      </BrowserRouter>

   

  );
};

export default App;
