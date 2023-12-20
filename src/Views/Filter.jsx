import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export const Filter = ({listName , title , type}) => {
  return (
    <div>
          <h6>
              {title}
          </h6>
          <div className="container" style={{ flexWrap: 'wrap' }}>
              <Row style={{ flexWrap: 'wrap' }}>
                  {
                      listName.map((item, index) => (
                          <Col key={index} md={type}>
                              <Form.Check // prettier-ignore
                                  type='checkbox'
                                  id={index}
                                  label={item}
                              />
                            
                          </Col>
                      ))
                  }
              </Row>
          </div>
    </div>
  )
}
