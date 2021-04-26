import React from 'react'
import './homecss.css'
import e6 from '../pics/e6.jpg'
import HomeCircles from './HomeCircles'
import { Button } from 'react-bootstrap'
import doc from '../pics/doc.svg'
import Yellowc from '../pics/yellowc2.png'

export default function HomeImg() {
    return (

        <div className="   flexwrap "
        // style={{ height: '85vh' }}
        >
            <div className=' absolute ' style={{ zIndex: '1', width: '100vw' }}>
                <div className=' mainnav margin' style={{ width: '70vw' }}>
                    <div className=' flex ' >
                        <div className='  paddingright'>Books</div>
                        <div>Foods</div>
                    </div>
                    <div className='flex  ' >
                        <div className='  ' style={{ width: '150px' }}>Tv Shows</div>
                        <div className='  paddingright'>Movies</div>
                    </div>
                </div>


            </div>




            <ul className="emmaimg flex justify relative " style={{}}>


                <div className="relative " style={{
                    zIndex: '4',
                    maxWidth: '700px',
                    // maxHeight: '85%',

                    minWidth: "380px",
                    // minHeight: "600px",
                }}>
                    <img src={e6} alt=''
                        className=" flex margin"
                        style={{
                            borderRadius: '50%',
                            // overflow: 'hidden',
                            zIndex: '3',
                            // marginRight: '0%',
                            width: '75%',
                            // height: '70%',
                            minHeight: "60%",
                            minWidth: "40%"

                        }}
                    />


                </div>

                <div className="absolute flex justify hide yeelowc" style={{
                    borderRadius: '',
                    zIndex: '1',
                    right: '20%',
                    top: '200px',
                    overflowX: 'clip ',
                    height: '28vh',
                    width: '28vw',

                }}>
                    <img src={Yellowc} alt='' className="absolute"
                        style={{
                            borderRadius: '50%',
                            zIndex: '2',
                            maxHeight: "340px",
                            // overflowX: 'hidden ',
                            minWidth: "200px",


                        }}
                    />
                </div>

            </ul>


            <div className=" flex absolute " style={{ zIndex: '4', width: '40vw' }} >
                <img src={doc} alt=''
                    className="   "
                    style={{
                        borderRadius: '',
                        zIndex: '4',
                        width: '5%',
                    }}
                /> </div>

            <div className="emmaimg flex justify alignText">

                <div className=" bannertxt "
                    style={{ zIndex: '4', flexDirection: 'column' }}>
                    <h1 className=" emma "> Emma Khan </h1>



                    <p className=" emmasubtitle "
                        style={{ color: '  #01a6e7', fontWeight: '600' }}
                    >Profile Page</p>


                    <div className="flex " style={{
                        justifyContent: 'space-around',
                        // width: "80%",

                        marginLeft: '0px'
                    }}>
                        <p>  <button className='btn  btn-md flex'
                            style={{ backgroundColor: '#FF050C', color: 'whitesmoke' }}
                        >
                            Contact Me </button> </p>

                        <p>  <Button className='btn  btn-md flex'
                            variant="outline"
                            style={{
                                borderColor: ' #01a6e7',
                                color: 'whitesmoke'
                            }}
                        >
                            Learn More </Button> </p>
                    </div>
                </div>
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

            {/* <div className=" absolute"></div> */}
            <div className="homebanner absolute "
                style={{


                }}>



            </div>





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
