import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Mens from "../assets/mensclothing.jpg";
import Womens from "../assets/womensclothing.jpg";
import Jewellery from "../assets/jewellery.jpg";
import Electronic from "../assets/electronic.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sunt error qui possimus, similique excepturi nesciunt quaerat, tenetur
          impedit dolores, incidunt voluptate magnam nihil doloremque temporibus
          saepe cupiditate natus provident? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem dolor inventore atque
          sint similique dolorum error saepe, doloremque animi debitis maiores,
          suscipit id distinctio ipsam itaque minus. Rerum, dolorum totam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas
          laboriosam, fugit doloremque veritatis a distinctio vitae quis
          mollitia dolore ab accusantium perspiciatis doloribus veniam ex nihil?
          Repellendus, doloribus minus.
        </p>

        <h2 className="text-center py-2">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src={Mens} alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5>Mens Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src={Womens} alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5>Womens Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src={Jewellery} alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5>Jewellery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src={Electronic} alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5>Electronic</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
