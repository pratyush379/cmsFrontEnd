import logo from './logo.svg';
import './App.css';
//import Header from './components/Header.js'; --> this is also right
import Header from './components/Header';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import About from './components/About';
import  ContactUs from './components/ContactUs';

import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
function App() {

  const mes = () =>{
    toast.warning('hello there kkkkkkkkkkkk',{
      position:'top-center',
    })
  };
  return (
    <>
    <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={4} >
         <Menus/>
        </Col>
        <Col md={8} >
          <Routes>
        <Route path='/'  Component={Home} exact/>
        <Route path='/add-courses'  Component={AddCourse} exact/>
        <Route path='/view-courses'  Component={AllCourses} exact/>
        <Route path='/about'  Component={About} exact/>
        <Route path='/contact' Component={ContactUs}exact/>
        <Route path='/edit-course/:id' Component={AddCourse}></Route>
        </Routes>
        </Col>
      </Row>
      
    </Container>
    </Router>
    </>
  );
}

export default App;
