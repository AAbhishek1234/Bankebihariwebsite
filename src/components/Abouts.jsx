import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container py-5" style={{backgroundColor:'#FFB733',borderRadius:"2rem",boxShadow:"0 0 2rem #553700",top:"6rem"}}>
      
      {/* Title */}
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 mb-4" style={{fontWeight:"700",fontSize:"40px"}} > 
            Glimpses of Major Festivals in Shree Banke Bihari Mandir 
          </h1>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="d-none d-md-block">
        <div className="row text-center">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/janmastmi.webp" className="card-img-top" alt="Janmashtami" />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Janmashtami</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/holi.webp" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Holi Mahotsav</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/radharani.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Radhaashtami</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/teej.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Haryali Teej</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/nandotsav.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Nandotsav</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/diwali2.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Diwali</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>

          
          {/* Add other festival cards as needed */}
        </div>
      </div>

      {/* Mobile View with Carousel */}
      <div className="d-md-none">
        <Carousel>
          <Carousel.Item>
            <div className="card h-100">
              <img src="/images/janmastmi.webp" className="card-img-top" alt="Janmashtami" />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Janmashtami</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card h-100">
              <img src="/images/holi.webp" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Holi Mahotsav</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card h-100">
              <img src="/images/radharani.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Radhaashtami</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card h-100">
              <img src="/images/teej.jpg" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Haryali Teej</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/nandotsav.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Nandotsav</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src="/images/diwali2.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
              <div className="card-body" style={{marginTop:"3rem"}}>
                <h5 className="card-title" style={{color:"#FFAE1A"}}>Diwali</h5>
                <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
              </div>
            </div>
          </div>
          </Carousel.Item>
          {/* Add other festival cards as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
