import React from 'react'
import Redc from '../pics/redc.png'
import Yellowc from '../pics/yellowc2.png'
import Bluec from '../pics/bluec.png'


export default function HomeCircles() {
    return (
        <div style={{}} className="relative flex">

            <div className="relative">
                <div className="absolute" style={{
                    borderRadius: '55%',
                    zIndex: '0',
                    left: '15%',
                    maxHeight: '',
                    width: '100vw'

                }}>
                    <img src={Redc} alt=''
                        style={{
                            borderRadius: '75%',
                            zIndex: '',
                            marginTop: '40%',
                            height: '30%',
                            width: '20%',
                            left: '5%'
                        }}
                    />
                </div>

                <div className="absolute flexwrap justify " style={{
                    borderRadius: '',
                    zIndex: '0',
                    marginRight: '40%',
                    top: '40%',
                    width: '80%',
                    height: '30%'

                }}>
                    <img src={Bluec} alt=''
                        style={{
                            borderRadius: '55%',
                            zIndex: '',
                            overflow: '',

                        }}
                    />
                </div>


                <div className="absolute " style={{
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
                </div>
            </div>

        </div>
    )
}
