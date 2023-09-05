import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Nav1( {onAdd}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
 

  
  const AddButtonClick = () => {
    onAdd( title, description, rating );
if(title&&description&&rating)
{navigate("/")}
else{alert("input is empty")}
  };


  return (
    <div>
   <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Movies App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Acceuil</Nav.Link>
          <Nav.Link href="#action1">Séries</Nav.Link>
          <Nav.Link href="#action1">Films</Nav.Link>
          <Nav.Link href="#action1">Nouveautés</Nav.Link>
          <Nav.Link href="#action1">Explorer par langue</Nav.Link>
          
          <Nav.Link href="#" disabled>
    
          </Nav.Link>
        </Nav>
  
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <div>
        <input  placeholder='Title'value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder='Description'value={description} onChange={(e)=>setDescription(e.target.value)} />
     
        <input placeholder='Rating' value={rating} onChange={(e)=>setRating(e.target.value)} type='number' />
     
        <button className='add'   onClick={AddButtonClick}>Add</button>
      </div>
    </div>
  );
}

export default Nav1;
