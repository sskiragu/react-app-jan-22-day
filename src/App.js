import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Counter';
import Login from './Login';
import Register from './Register';
import './App.css';
export default class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/register' element={<Register />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
