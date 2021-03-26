import React from 'react'
import B1 from '../pics/b1.jpg'

export default function HomeImg() {
    return (
        <div>
            <div className="">
                <img src={B1} alt=""
                    style={{
                        width: '100vw',
                        maxHeight: '50vh'

                    }}
                />
            </div>
        </div>
    )
}
