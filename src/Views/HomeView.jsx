
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from '../components/NavbarComponent';
import Carousel from 'react-bootstrap/Carousel';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from '../components/CartProduct';
import axios from 'axios';
import { CartItem } from '../components/CartItem';
import { URL_API } from '../config'

export const HomeView = () => {

  const [listProduct,setListProduct] = useState(  );

  useEffect(()=>{
    axios.get(`${URL_API}`)
      .then(function (response) {
        console.log(response?.data);
        setListProduct(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    
  },[])

  return (
    <div style={{backgroundColor:'red'}}>
      <div className='container' style={{ padding: 0, backgroundColor: 'red', minHeight: '100dvh', flex: 1, gap: 20, flexDirection: 'column', display: 'flex' }}>
        <NavbarComponent />
        <div className='container' style={{ padding: 0 }}>
          <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/12/1/638369859388747700_desk-header (1).png" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div className='container'>
          <div className='row' style={{ padding: 4, backgroundColor: 'white', borderRadius: 6 }}>
            <div className='col col-md-9' style={{ padding: 0, }}>

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

              <Nav variant="tabs" defaultActiveKey="0" >
                <NavItem style={{ flex: 1 }}>
                  <Nav.Link eventKey="0" >Iphone 15 pro max</Nav.Link>
                </NavItem>
                <NavItem style={{ flex: 1 }}>
                  <Nav.Link eventKey="1" >Iphone 15 pro max</Nav.Link>
                </NavItem>
                <NavItem style={{ flex: 1 }}>
                  <Nav.Link eventKey="2" >Iphone 15 pro max</Nav.Link>
                </NavItem>
              </Nav>

            </div>
            <div className='col col-md-3' style={{ padding: 0, borderRadius: 4 }}>
              <div className='row' style={{ borderWidth: 0.5, borderColor: 'red', flex: 1 }}>
                <div>
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/31/638343693231994577_F-H2_385x100 (3).png" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                </div>
              </div>
              <div className='row' style={{ borderWidth: 0.5, borderColor: 'red', flex: 1 }}>
                <div>
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/31/638343693231994577_F-H2_385x100 (3).png" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                </div>
              </div>


              <div className='row' style={{ borderWidth: 0.5, borderColor: 'red', flex: 1 }}>
                <span>
                  Tin khuyễn mãi
                </span>
                <div>
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/31/638343693231994577_F-H2_385x100 (3).png" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                </div>
                <div>
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/31/638343693231994577_F-H2_385x100 (3).png" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container' style={{ padding: 0 }}>
          {/* <GroupExample /> */}
         {
          listProduct?.map((item)=>(
            <CartItem
              item={item}
            />
          ))
         }
        </div>
      </div>
    </div>
  );
  // <div>
  //   <div>

  //     <Link to="/Login">Login</Link>
  //   </div>
  // </div>
  // )
}
