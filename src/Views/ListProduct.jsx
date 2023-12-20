import React, { useEffect, useLayoutEffect, useState } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import { Carousels } from '../components/Carousels'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Filter } from './Filter';
import { CartItem } from '../components/CartItem';
import axios from 'axios';
import { URL_API } from '../config'

const listName = ['Tất cả', 'Asus', 'HP', 'MSI']
const listPrice = ['Tất cả', 'Dưới 2 triệu', 'Từ 2 - 5 triệu', 'Từ 5 - 10 triệu']
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
const defaultOptions = {
    headers,
    baseURL: 'https://85db-42-119-82-82.ngrok-free.app/app/product',
    timeout : 3000,
}
export const ListProduct = () => {


    const [listProduct, setListProduct] = useState([]);

     async function get (){
        //  await axios.get('https://85db-42-119-82-82.ngrok-free.app/app/product').then((e)=>{
        //     console.log('123',e);
        //  }).catch((e)=>{
        //     console.log(e);
        //  })
         try {
             // Thực hiện cuộc gọi API sử dụng Axios
             const response = await axios.get('https://85db-42-119-82-82.ngrok-free.app/app/product', {
                 headers: {
                     Accept: 'application/json',
                     'Content-Type': 'application/json',
                 },
             });
             // Lấy dữ liệu từ phản hồi và cập nhật state
            //  setData(response.data);
            console.log(response);
             console.log(response?.data);
         } catch (error) {
             console.error('Error fetching data:', error);
         }
    }

    useLayoutEffect(() => {
        get()

    }, [])
    return (
        <div style={{ minHeight: '100dvh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <NavbarComponent />
            <Container >
                <Carousels />
            </Container>

            <Container style={{ marginBottom: 32 }}>
                <Row>
                    <Col md={3}>
                        <Filter listName={listName} title={'Hãng sản phẩm'} type={6} />
                        <Filter listName={listPrice} title={'Mức giá'} type={7} />
                        <Filter listName={listName} title={'Màn hình'} type={7} />
                        <Filter listName={listName} title={'CPU'} type={7} />
                        <Filter listName={listName} title={'RAM'} type={7} />
                        <Filter listName={listName} title={'Card đồ họa'} type={7} />
                        <Filter listName={listName} title={'Ổ cứng'} type={7} />
                        <Filter listName={listName} title={'Nhu cầu'} type={7} />
                    </Col>
                    <Col xs={9}
                    >

                        {/* lọc theo nhu cầu*/}
                        <Row style={{
                            padding: 0, marginTop: 16, border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}>
                            <h4
                                style={{ marginBottom: 16 }}
                            > Laptop theo yêu cầu</h4>
                            {
                                listName.map((item) => (
                                    <Col md={2} style={{ padding: 0, alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <img
                                            src='https://i.pinimg.com/736x/0d/7f/05/0d7f05e80a12f2cef65392de51beaa3e--anh-em-hd-wallpaper.jpg'
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                        <p>
                                            {item}
                                        </p>
                                    </Col>
                                ))
                            }
                        </Row>
                        <Row style={{
                            padding: 0, marginTop: 20,
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '16px 0'
                        }}>

                            {/* {
                              listProduct?.map((item)=>(
                                  <Col md={4} style={{ padding: 0 }}>
                                      <CartItem item={item} />
                                  </Col>
                              ))
                            } */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
