import React from 'react'
import Redc from '../pics/redc.png'
import Yellowc from '../pics/yellowc2.png'
import Bluec from '../pics/bluec.png'


export default function HomeCircles() {
    return (
        <div style={{}} className="relative flex">

            <div className="relative" style={{ width: '80vw' }}>
                <div className="absolute flexwrap " style={{

                    zIndex: '0',
                    // left: '15%',

                    // width: '31vw',
                    // height: '31vw',
                    top: '390px',
                    // marginRight: "40%"
                    width: '60%',
                    height: '20%'

                }}>

                    <img src={Redc} alt='
                        className="absolute flex"'
                        style={{
                            borderRadius: '55%',
                            zIndex: '',
                            // height: '25vw',
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
                    height: '20%'

                }}>
                    <img src={Bluec} alt=''
                        className="absolute"
                        style={{
                            borderRadius: '55%',
                            zIndex: '',
                            overflow: '',
                            maxHeight: "470px",
                            left: '-200px',
                            minWidth: "200px"

                        }}
                    />
                </div>


                {/* <div className="absolute " style={{
                    borderRadius: '',
                    zIndex: '0',
                    right: '0',
                    top: '30%',
                    overflow: 'hidden'

                }}>
                    <img src={Yellowc} alt=''
                        style={{
                            borderRadius: '75%',
                            zIndex: '',
                            overflow: 'hidden',
                            width: '50%',
                        }}
                    />
                </div> */}
            </div>

        </div>
    )
}
