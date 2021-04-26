import React from 'react'
import Redc from '../pics/redc.png'
import Yellowc from '../pics/yellowc2.png'
import Bluec from '../pics/bluec.png'


export default function HomeCircles() {
    return (
        <div style={{}} className="relative flex">

            <div className="relative" style={{ width: '100vw' }}>
                <div className="absolute flexwrap hide" style={{

                    zIndex: '0',
                    // left: '15%',

                    // width: '31vw',
                    // height: '31vw',
                    top: '380px',
                    // marginRight: "40%"
                    width: '60%',


                }}>

                    <img src={Redc} alt='
                        className="absolute flex"'
                        style={{
                            borderRadius: '55%',
                            zIndex: '',

                            // width: '25vw',
                            left: '-50',
                            minWidth: "200px",
                            maxHeight: "360px",

                        }}
                    />
                </div>

                <div className="absolute flexwrap justify " style={{

                    zIndex: '0',
                    marginRight: '40%',
                    top: '40%',
                    width: '70%',


                }}>
                    <img src={Bluec} alt=''
                        className="absolute"
                        style={{
                            borderRadius: '55%',
                            zIndex: '',
                            overflow: '',
                            maxHeight: "460px",
                            left: '-240px',
                            minWidth: "200px"

                        }}
                    />
                </div>

                {/* 
                <div className="absolute flex justify hide yeelowc" style={{
                    borderRadius: '',
                    zIndex: '0',
                    right: '18%',
                    top: '180px',
                    overflowX: 'clip ',
                    height: '28vh',
                    width: '28vw',

                }}>
                    <img src={Yellowc} alt='' className="absolute"
                        style={{
                            borderRadius: '50%',
                            zIndex: '',
                            maxHeight: "340px",
                            // overflowX: 'hidden ',
                            minWidth: "200px",


                        }}
                    />
                </div> */}
            </div>

        </div>
    )
}
