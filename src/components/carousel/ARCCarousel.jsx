import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function ARCCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.arenaracingcompany.co.uk/ArenaRacingCompany/images/upload/6f990b94-97a0-43c7-9af8-b54c25357c48.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>2023 Annual Memberships</h3>
            <p>Your ticket to all the racing action!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.arenaracingcompany.co.uk/ArenaRacingCompany/images/upload/2136604a-a5f6-487f-8866-b4a0cb26c591.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>£1 Million All-Weather Bonus</h3>
            <p>To be won at ARC all-weather racecourses this Winter!</p>
          </Carousel.Caption>
        </Carousel.Item>        
      </Carousel>
    </div>
  )
}
