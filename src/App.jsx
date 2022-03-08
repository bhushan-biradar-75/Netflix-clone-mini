import React from 'react';
import './App.css'
import { Link } from "react-router-dom";
const Main = (props) => {

// Display the card here

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="container-fluid">
            <div className="flex main_layout">
              <div className="card" style={{ width: "14rem" }}>
                <img src={props.src} class="card-img-top" alt="..." />
                <div className="card-body" />
                <h5 style={{color:'white'}} className="card-title">{props.title}
                </h5>
                <p style={{color: 'white'}} className="card-text">{props.sname}</p>              
                <a href="https://www.hotstar.com/in/eternals-trailer/1260077097" className="btn btn-primary">WATCH</a>
                <li>
                  {/* <Link className='btn-primary' to=''>SUBMIT</Link> */}
                  </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Main;
