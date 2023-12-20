import React, { useEffect, useLayoutEffect } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import { Carousels } from '../components/Carousels'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Filter } from './Filter';
import { CartItem } from '../components/CartItem';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { URL_API } from '../config';


export const ProductDetail = () => {


    const { id } = useParams();
    useLayoutEffect(()=>{
        axios.get(`${URL_API}`, {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
                // setListProduct(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    },[])

    return (
        <div style={{ minHeight: '100dvh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <NavbarComponent />
            <Container >
                <Carousels />
            </Container>

            <Container style={{ marginBottom: 32 }}>
                <h4>
                    Laptop HP Pavilion 14-dv2075TU i5 1235U/8GB/512GB SSD/14"FHD/Win11
                </h4>
                <Row>
                    <Col md={6}>
                        <Carousels

                        />
                        <h5>Đánh giá chi tiết HP Pavilion 14-dv2075TU i5 1235U (7C0W2PA)</h5>
                      <span>
                            Thiết kế thanh thoát, nhỏ gọn, màn hình sắc nét và cấu hình vô cùng mạnh mẽ, HP Pavilion 14-dv2075TU là chiếc laptop doanh nhân đẳng cấp dành cho bạn, mang tới khả năng giải quyết công việc mọi lúc mọi nơi, ngay cả khi đang di chuyển.
                      </span>
                    </Col>
                    <Col md={6}
                    >
                        <h5>
                            Thông số kỹ thuật
                        </h5>
                        <div style={{ padding: 16 }}>
                            <Row style={{ padding: 0 }}>
                                <Col md={3} style={{ padding: 8 }}>
                                    <div>
                                        <span>
                                            Màn hình
                                        </span>
                                    </div>
                                </Col>
                                <Col md={9} style={{ padding: 8 }}>
                                    <div>
                                        <span>
                                            14.0 inch, 1920 x 1080 Pixels, IPS, 60 Hz, 250 nits, LED Backlit
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
