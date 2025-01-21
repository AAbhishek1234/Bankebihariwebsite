import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timming = () => {
  return (
    <>
    <div className="container my-4" >
      <Table striped bordered hover  style={{marginTop:"5rem",boxShadow:"0 0 10px black"}} >
      <thead>
          <tr>
            <th colSpan="3" className="text-center" style={{fontWeight:"700",fontSize:"35px",color:"darkorange"}} >
              Shree Banke Bihari Mandir's Timmings
            </th>
          </tr>
        </thead>  
        <thead>
          <tr  >
            <th colSpan="3" className="text-center" style={{fontWeight:"700",fontSize:"35px"}} >
              Summer's Timmings
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  ></td>
            <td style={{width:"15rem",fontWeight:"600",fontSize:"30px",textAlign:"center"}} > Morning </td>
            <td style={{width:"15rem",fontWeight:"600",fontSize:"30px",textAlign:"center"}} > Evening </td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}}>Mandir Opens at </td>
            <td   style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }}  >07:45 AM</td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} >05:30 PM</td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Shringar Aarti</td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 8:00 AM </td>
            <td></td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Bhog at </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 11:00 AM </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} >08:30 PM</td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Aarti & Closing </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 12:00 PM </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 09:30 PM</td>
          </tr>
        </tbody>
      </Table>
    </div>
      <div className="container my-4" >
      <Table striped bordered hover  style={{marginTop:"-5rem"}} >
        <thead>
          <tr>
            <th colSpan="3" className="text-center" style={{fontWeight:"700",fontSize:"35px"}} >
              Winnter's Timmings
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  ></td>
            <td style={{width:"15rem",fontWeight:"600",fontSize:"30px",textAlign:"center"}} > Morning </td>
            <td style={{width:"15rem",fontWeight:"600",fontSize:"30px",textAlign:"center"}} > Evening </td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}}>Mandir Opens at </td>
            <td   style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }}  >08:45 AM</td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} >04:30 PM</td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Shringar Aarti</td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 9:00 AM </td>
            <td></td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Bhog at</td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 12:00 AM </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} >07:30 PM</td>
          </tr>
          <tr>
            <td style={{fontWeight:"600",fontSize:"28px",textAlign:"center"}} >Aarti & Closing </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 01:00 PM </td>
            <td style={{fontWeight:"400",fontSize:"24px",textAlign:"center" }} > 08:30 PM</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default Timming;
