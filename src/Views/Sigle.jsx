import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const listDATA = 
    {
        status: true,
        order_detail: [
            {
                gia: 1000000,
                so: 2,
                thanh: 200000,
                img: 'https://3.bp.blogspot.com/-LnD05t_bXz0/UMS0kJSqvsI/AAAAAAAABqg/xaGAL495RUs/s1600/anh-girl-xinh-viet-nam10.jpg'
            }
        ],
        thanhtien:100000000

    }



export const MyOrder = () => {
    return (
        <div style={{ minHeight: '100dvh', backgroundColor: 'white' }}>
            <NavbarComponent />
            <Container style={{ marginTop: 32 }} >
                <Row>
                    <Col md={4}>
                        <h5 style={{ padding: 16, backgroundColor: 'yellow' }}>
                            Thông tin tài khoản
                        </h5>

                    </Col>
                    <Col md={8}>
                        <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '10px', marginTop: '16px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingBottom: '8px',
                                    borderBottom: '1px solid rgb(158, 139, 139)',
                                }}
                            >
                                <span style={{ fontWeight: '600' }}>Đơn hàng</span>
                                <span style={{ fontWeight: '500' }}>{listDATA?.status ? 'Đã nhận' : 'Chưa nhận'}</span>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ display: 'block', width: '78%' }}>
                                        {listDATA?.order_detail.map((items, index) => (
                                            <div key={index} style={{ width: '100%' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ width: '30%' }}>
                                                        <img src={items.img} alt={'cc'} style={{width:100,height:100,objectFit:'contain'}}/>
                                                    </div>
                                                    <div style={{ width: '100%', padding: '0 32px' }}>
                                                        <h3>{items.gia}</h3>
                                                        <p style={{ padding: '16px 0' }}>
                                                            Giá : {items.thanh.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                                        </p>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                <h4 style={{ padding: '8px 0' }}>Số lượng:</h4>
                                                                <span className="total">{items?.so}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ textAlign: 'end', paddingRight: 'unset', width: '35%' }}>
                                                        <span style={{ fontSize: '1.4rem', fontWeight: '600', color: 'orange' }}>
                                                            <span>{items.gia?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div style={{ margin: '20px 0', height: '1px', width: '100%', border: '1px', borderStyle: 'dashed' }} className="col"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ width: '30%', alignItems: 'center', textAlign: 'center' }}>
                                        <h4>Tổng tiền</h4>
                                        <h4 style={{ marginTop: '32px', color: 'orange', fontSize: '1.5rem' }}>
                                            {listDATA?.thanhtien?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
