import React from 'react'
import './homecss.css'
import e6 from '../pics/e6.jpg'
import HomeCircles from './HomeCircles'
import { Button } from 'react-bootstrap'
import Yellowc from '../pics/yellowc2.png'

export default function HomeImg() {
    return (

        <div className=" relative flexwrap ">
            <div className="absolute emmaimg" style={{
                zIndex: '4',
                right: '0',
                overflow: 'hidden',
                maxWidth: '700px',
                maxHeight: '85%',
                marginLeft: '600px',
                minWidth: "380px",
                // minHeight: "600px",
            }}>
                <img src={e6} alt=''
                    className=" flex margin"
                    style={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        zIndex: '3',
                        marginRight: '0%',
                        width: '70%',
                        height: '65%',
                        minHeight: "60%",
                        minWidth: "40%"

                    }}
                />
            </div>


            {/* <div className="absolute flex overflow" style={{
                right: '-5%',
                bottom: '150px',
                justifyContent: "flex-end"
            }}>
                <img src={Yellowc} alt='' className="flex overflow "
                    style={{
                        borderRadius: '75%',
                        zIndex: '',
                        overflow: 'hidden',
                        width: '40%',

                    }}
                />
            </div> */}

            <div className=" absolute"></div>
            <div className="homebanner "
                style={{


                }}>


                {/* <img src={HomeImg} alt=""
                    style={{
                        width: '100vw',
                        maxHeight: '80vh',


                    }}
                /> */}
            </div>
            {/* <div class="_1q4EvJIaNQTfwto3DvpxDf"
            style={{ ba }}
            style="background-color: rgb(255, 0, 0);"></div> */}

            <div className=" absolute flexwrap  namecontainer  "
                style={{ zIndex: '4', flexDirection: 'column' }}>
                <h1 className=" emma "> Emma Khan </h1>



                <p className=" emmasubtitle "
                    style={{ color: 'whitesmoke' }}
                >Profile Page</p>


                <div className="flex" style={{ justifyContent: 'space-between', marginLeft: '0px' }}>
                    <p>  <button className='btn  btn-lg flex'
                        style={{ backgroundColor: '#FF050C', color: 'whitesmoke' }}
                    >
                        Contact Me </button> </p>

                    <p>  <Button className='btn  btn-lg flex'
                        variant="outline-primary"
                        style={{ border: '', color: 'whitesmoke' }}
                    >
                        Learn More </Button> </p>
                </div>





            </div>
            {/* <div className="flexwrap  alignitems absolute">
                <button className='btn btn-danger btn-lg' >
                    Contact Me </button>


            </div> */}

            <div className="absolute">
                <HomeCircles />
            </div>
            {/* <div className="absolute">
                <img src={e6} alt=''
                    style={{
                        borderRadius: '75%',
                        overflow: 'hidden',
                        zIndex: '3',
                        marginRight: '0%',
                        marginLeft: '100%',
                        height: '80%',
                        width: '70%',

                    }}
                />
            </div> */}



        </div >
    )
}
