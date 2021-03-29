import React from 'react'
import b3 from '../pics/b3.jpg'
import b7 from '../pics/b7.jpg'
import e3 from '../pics/e3.jpg'
import e7 from '../pics/e1.jpg'
import e8 from '../pics/e8.jpg'
import e9 from '../pics/e9.jpg'

import { Carousel } from 'react-bootstrap'
export default function HomeCarousel() {
    return (
        <div>
            <div className=" justify " style={{}}>
                <Carousel className=" " style={{}}>
                    <Carousel.Item>
                        <img
                            className="carimg"
                            src={b3}
                            alt="First slide"
                            style={{ objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3> </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carimg"
                            src={e3}
                            alt="Second slide"
                            style={{ objectFit: 'cover' }}
                        />

                        <Carousel.Caption>
                            <h3> </h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carimg"
                            src={e7}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> </h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="carimg"
                            src={b7}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3> </h3>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="carimg"
                            src={e9}
                            alt="Fifth slide"
                        />

                        <Carousel.Caption>
                            <h3>  </h3>

                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
        </div>
    )
}
