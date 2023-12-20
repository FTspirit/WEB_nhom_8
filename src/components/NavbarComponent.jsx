
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavbarComponent = () => {
    return (
        <div className='container-fill' style={{ padding: 0,backgroundColor:'red' }}>
            <Navbar 
            // bg="body-tertiary" 
            expand="lg" style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: '0 68px' }}>
                <Navbar.Brand href="/" style={{ }}>
                    <img src="https://i.pinimg.com/originals/da/01/07/da01079128fe7d6ccc366f3b691156a9.jpg" alt="Description" style={{ width: '120px', height: '30px', objectFit: 'contain' }} />
                </Navbar.Brand>
                <Form className="d-flex col-md-6 " >
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"

                    />
                    <Button variant="dark">
                        Search
                    </Button>
                </Form>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="#" style={{}}>
                                <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', display: 'flex', flex: 1 }}>
                                    <img src="https://i.pinimg.com/originals/da/01/07/da01079128fe7d6ccc366f3b691156a9.jpg" alt="Description" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    <span style={{ fontSize: 12 }}>
                                        Thông tin hay
                                    </span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/Login" style={{}}>
                                <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', display: 'flex', flex: 1 }}>
                                    <img src="https://i.pinimg.com/originals/da/01/07/da01079128fe7d6ccc366f3b691156a9.jpg" alt="Description" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    <span style={{ fontSize: 12 }}>
                                        Thanh toán
                                    </span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/MyOrder" style={{}}>
                                <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', display: 'flex', flex: 1 }}>
                                    <img src="https://i.pinimg.com/originals/da/01/07/da01079128fe7d6ccc366f3b691156a9.jpg" alt="Description" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    <span style={{ fontSize: 12 }}>
                                        Tài khoản của tôi
                                    </span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/my-cart" style={{}}>
                                <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', display: 'flex', flex: 1 }}>
                                    <img src="https://i.pinimg.com/originals/da/01/07/da01079128fe7d6ccc366f3b691156a9.jpg" alt="Description" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    <span style={{ fontSize: 12 }}>
                                        Giỏ hàng
                                    </span>
                                </div>
                            </Nav.Link>
                            {/* <Nav.Link href="#" style={{ backgroundColor: 'green' }}>Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link disabled>Disabled</Nav.Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
    // <div>
    //   <div>

    //     <Link to="/Login">Login</Link>
    //   </div>
    // </div>
    // )
}
