import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function DemoCarousel(){
    return(
    <Carousel>
            <div>
                <img src="1.jpg"/>
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="2.jpg" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="3.jpg" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="4.jpg" />
                <p className="legend">Las Vegas</p>
            </div>
               
    </Carousel>
    )
}