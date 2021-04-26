import React from 'react'
import B1 from '../pics/b1.jpg'
import { Button } from 'react-bootstrap'

export default function HomeImg(top) {
    return (
        <div className="flex  justify margin midimgcontainer "
        >
            <div className=" absolute midimgbackdrop "
                style={{}} >

            </div>

            <div className="relative midimg">
                <img src={B1} alt=""
                    style={{
                        maxWidth: "100%",
                        minWidth: "100%",
                        // width: '100%',
                        // minHeight: '50%'
                        maxHeight: "100%",
                        borderRadius: '1%'
                    }}
                />


                <div className="absolute"
                    style={{
                        bottom: '5%',
                        zIndex: '2',
                        display: 'inline-block'
                    }}
                >
                    <Button variant="danger" href="#top">Back to Top<strong> &#8593;</strong>

                    </Button>
                </div>
            </div>

        </div>
    )
}
