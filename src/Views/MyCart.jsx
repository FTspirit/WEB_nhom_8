import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const listDATA = [
  {
    name:'con ket',
    gia :1000000,
    so:2,
    thanh: 200000,
    img:'https://3.bp.blogspot.com/-LnD05t_bXz0/UMS0kJSqvsI/AAAAAAAABqg/xaGAL495RUs/s1600/anh-girl-xinh-viet-nam10.jpg'
  },
  {
    name: 'con ket',
    gia: 1000000,
    so: 2,
    thanh: 200000,
    img: 'https://3.bp.blogspot.com/-LnD05t_bXz0/UMS0kJSqvsI/AAAAAAAABqg/xaGAL495RUs/s1600/anh-girl-xinh-viet-nam10.jpg'
  },
  {
    name: 'con ket',
    gia: 1000000,
    so: 2,
    thanh: 200000,
    img: 'https://3.bp.blogspot.com/-LnD05t_bXz0/UMS0kJSqvsI/AAAAAAAABqg/xaGAL495RUs/s1600/anh-girl-xinh-viet-nam10.jpg'
  }
]

export const MyCart = () => {
  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'white' }}>
      <NavbarComponent />
      <Container style={{marginTop:32}} >
        <Row>
          <Col md={8}>
            <h5 style={{padding:16,backgroundColor:'yellow'}}>
              Giỏ hàng
            </h5>
            {
              listDATA.map((item)=>(
                <div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '30%' }}>
                      <img src={item.img} alt={item.name}  style={{width:100,height:100,objectFit:'contain'}}/>
                    </div>

                    <div style={{ width: '100%', padding: '0 32px' }}>
                      <h3>{item.name}</h3>
                      <p style={{ padding: '16px 0' }}>
                        Giá : {item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between' }}>
                        <div>
                          <h4 style={{ padding: '8px 0' }}>Số lượng:</h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span
                              // onClick={() => handleDownTotal(index)}
                              style={{
                                cursor: 'pointer',
                                width: '30px',
                                backgroundColor: 'rgba(224, 197, 197, 0.5)',
                                borderRadius: '4px',
                                border: '1px solid rgb(101, 93, 93)',
                              }}
                            >
                              -
                            </span>
                            <span className="total">{item.so}</span>
                            <span
                              // onClick={() => handleUpTotal(index)}
                              style={{
                                cursor: 'pointer',
                                width: '30px',
                                backgroundColor: 'rgba(224, 197, 197, 0.5)',
                                borderRadius: '4px',
                                border: '1px solid rgb(101, 93, 93)',
                              }}
                            >
                              +
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 style={{ padding: '8px 0' }}>Màu sắc:</h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
                            <p
                              style={{
                                cursor: 'pointer',
                                textAlign: 'center',
                                width: 'fit-content',
                                backgroundColor: 'rgba(224, 197, 197, 0.5)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: '1px solid rgb(101, 93, 93)',
                              }}
                            >
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'end', paddingRight: 'unset', width: '35%' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'orange' }}>
                        <span className="price-prs">{item.thanh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</span>
                        <br />
                        <p style={{ color: 'orange' }}>Còn hàng</p>
                        <div
                          // onClick={() => deleteOrder(index)}
                          style={{
                            marginTop: '5%',
                            cursor: 'pointer',
                            display: 'flex',
                            padding: '8px 0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#212529',
                          }}
                        >
                          <i className='bx bx-trash' style={{ fontSize: '22px', padding: '0px 58px' }}>
                            Xóa
                          </i>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div style={{ margin: '20px 0', height: '1px', width: '100%', border: '1px', borderStyle: 'dashed' }} className="col"></div>
                </div>
              ))
            }
          </Col>
          <Col md={4}>
              <h5>
                Tổng
              </h5>
              <span>-----------------------------------------------------</span>
              <h5>
                Thành tiền
              </h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
