import React from 'react'
import './homecss.css'

import e6 from '../pics/e6.jpg'
import HomeCircles from './HomeCircles'


export default function HomeImg() {
    return (

        <div className=" relative flex ">
            <div className="absolute emmaimg" style={{
                zIndex: '4',
                right: '',
                overflow: 'hidden',
                width: '40%',
                maxHeight: '80%',
                marginLeft: '50%',

            }}>
                <img src={e6} alt=''
                    className=" flex margin"
                    style={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        zIndex: '3',
                        marginRight: '0%',

                        width: '90%',
                        height: '75%',


                    }}
                />
            </div>



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

                <p>  <button className='btn  btn-lg'
                    style={{ backgroundColor: '#FF050C', color: 'whitesmoke' }}
                >
                    Contact Me </button> </p>


                <p className=" emmasubtitle "
                    style={{ color: 'whitesmoke' }}
                >Profile Page</p>




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
