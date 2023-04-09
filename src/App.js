//1 import area
import { useState } from 'react';
import './App.css';
import {  Button, Form, Image } from 'react-bootstrap';
import axios from 'axios';

//2defination area
function App() {
  //2.1 hooks area
    const [pp,setpp] =useState();

  //2.2 defination area

  let handleChange = (e)=>{
    //alert('okk')
    let imgs = document.getElementById('prvw');
    console.log(e.target.files[0].type)
    let pp = e.target.files[0]
    if(pp.name.match('jpg')){
      alert('image taken')
      
      imgs.src = URL.createObjectURL(pp)
    }else{
      alert('select image only')
      return 
    }
  }
  let handleUpload = () =>{
    alert('hello')

    const formData = new FormData();
    formData.append('files', );
    axios.post('http://localhost:1337/api/upload', formData);
  }

  //2.3 return statement
  return (
    <>
    <div className="App ">
      <Form>
        <Form.Group controlId="formFile" className="mb-3 ">
          <Form.Control type="file" accept="image/*" onChange={(e)=>{handleChange(e)}} />
          <Button variant="secondary" type='button' onClick={handleUpload}>upload</Button>
          <br />
          <Image id='prvw' src=""/>
        </Form.Group>
      </Form>
    </div>
    </>
  );
}

//export area
export default App;
