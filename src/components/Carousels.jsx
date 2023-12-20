import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Carousels = () => {
  return (
      <Carousel style={{ padding: 0 }}>
          <Carousel.Item>
              <img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/30/638369814887373039_F-H1_800x300.png" class="d-block w-100" style={{ borderRadius: 4 }} />

              <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/30/638369814887373039_F-H1_800x300.png" class="d-block w-100" style={{ borderRadius: 4 }} />

              <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/30/638369814887373039_F-H1_800x300.png" class="d-block w-100" style={{ borderRadius: 4 }} />

              <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}
