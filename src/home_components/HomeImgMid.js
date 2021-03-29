import React from 'react'
import B1 from '../pics/b1.jpg'

export default function HomeImg() {
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



            </div>

        </div>
    )
}
