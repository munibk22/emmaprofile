import React from 'react'
import B1 from '../pics/b1.jpg'

export default function HomeImg() {
    return (
        <div className="flex  justify margin midimgcontainer"
            style={{
                borderRadius: '2%',


            }}
        >
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
                <div className=" absolute  ">
                </div>


            </div>
        </div>
    )
}
