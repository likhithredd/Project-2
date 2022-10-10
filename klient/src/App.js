import './App.css';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div>
          

      <Row>
      <Col xs={3}>
          <img src="./pic.jpeg" width="350"  className="d-inline-block align-top" alt="" />
          </Col>
          <Col >
          <p>Likhith Reddy Adla</p>
          <p>My name is Likhith, 24, still a student, looking for a part time job I can do while still at school, ideally working remotely. I’m skilled with C and Java, and I am trying to learn other programming languages, step by step</p>
          </Col>
    </Row>

    </div>

    
  );
  }
export default App;
