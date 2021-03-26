import React from 'react'
import B1 from '../pics/b1.jpg'

export default function HomeImg() {
    return (
        <div>
            <div className="flex justify">
                <img src={B1} alt=""
                    style={{
                        width: '85vw',
                        maxHeight: '50vh'

                    }}
                />
            </div>
        </div>
    )
}
