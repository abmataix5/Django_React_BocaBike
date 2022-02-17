import React from "react";
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {

    return (
        <> 
        <div className="container">
            <div className="row p-3">
                <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src='./bici.jpeg'   //800x400img
                    alt="First slide"
                    />
    
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src='./bici.jpeg'  //800x400img
                    alt="Second slide"
                    />
        
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src='./bici.jpeg'  //800x400img
                    alt="Third slide"
                    />

                </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </>
    );
  }