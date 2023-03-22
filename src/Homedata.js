import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table } from 'react-bootstrap';
import Employee from './Employee';
import { useState } from 'react';
import Navbar from './Navbar';

const Home = () => {
      const [rowsData, setRowsData] = useState([]);
  const hadledelete=(id)=>{
      console.log(id)
      var index=Employee.map((e)=>{
              return e.id
      }).indexOf(id)
       Employee.splice(index,1)
       setRowsData(Employee)
} 
  
       


  return (
      <>
      <Navbar/>
    <div style={{margin:"10rem"}}>
<Table striped bordered hover responsive="sm" size='sm'>
      <thead>
            <tr>
                  <th>Name</th>
                  <th>Age</th>
            </tr>
      </thead>
      <tbody>
{
      rowsData && rowsData.length>0
      ?Employee.map((item,id)=>{
            return(
          <tr>
            <td>{item.Nmae}</td>
            <td>{item.age}</td>
            <td><Button>Edit</Button>
            &nbsp;
            <Button onClick={()=>hadledelete(item.id)}>Delete</Button></td>
          </tr>
            )
      })
    :"No data available"
}
      </tbody>
</Table>
    </div>
    </>
  )
}

export default Home

