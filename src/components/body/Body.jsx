import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './body.css'
import first from '../../assets/firstitem.png'
import second from '../../assets/second.jpg'
import { RxCross1 } from "react-icons/rx";



const Body = () => {

    let [Ami , setAmi] = useState(0);              /* Ami variable works in html and setAmi works in JS to change dynamically */

    let handlePlus = ()=>{
        setAmi( Ami + 1);
        setTotal ( total + 190);
        
    }
    let handleMinus = ()=>{
        if (Ami > 0) {
            setAmi( Ami - 1);   
            setTotal ( total - 190);
        }
    }    
    
    let [total , setTotal] = useState( 190 )

    
  return (
    <section id='Incre'>
        <Container>
            <Row className='mainHead' >
                <Col lg={12} className='d-flex align-items-center justify-content-center ' >
                    <h3 className='head'>Checkout</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className='sellMain'>
                <Row>
                    <Col lg={12} className="text-center">
                        <h3 className='sellHead'>Shopping Cart</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xs={4} className='sell'>
                        <img src={first} alt="iphone" className='img-fluid' />
                    </Col>
                    <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='d-flex align-items-center justify-content-center '>
                        <RxCross1 />
                    </Col>
                    <Col lg={4} xs={4} className='d-flex align-items-center justify-content-center '>
                        <h3><span>$120</span></h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xs={4} className='sell'>
                        <img src={second} alt="iphone" className='img-fluid' />
                    </Col>
                    <Col lg={{span:3 , offset:1}} xs={{span:3 , offset:1}} className='d-flex align-items-center justify-content-center '>
                        <RxCross1 />
                    </Col>
                    <Col lg={4} xs={4} className='d-flex align-items-center justify-content-center '>
                        <h3><span>$70</span></h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span:3 , offset:5}} xs={{span:3 , offset:3}} className='d-flex justify-content-center'>
                        <h4 className='calc'>Subtotal:</h4>
                    </Col>
                    <Col lg={{span:3 , offset:0}} xs={{span:6 , offset:0}}  className='d-flex justify-content-end '>
                        <h4 className='calc'><span>$ {total}</span></h4>
                    </Col>
                </Row>

                </Col>
                <Col lg={{span:3 , offset:1}} className='sellMain lastCall'>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h3 className='sellHead'>ADD OR DROP ITEMS</h3>
                        </Col>
                    </Row>
                    <Row className='lastSell'>
                        <Col lg={12}>
                            <Row>
                                <Col lg={12}>
                                    <div className='count'>
                                        <button onClick={handlePlus}>ADD</button>     {/* always add handle before variable name for this function */}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='changeC'>
                                        <p>{Ami}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='count'>
                                        <button onClick={handleMinus}>DROP</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Body