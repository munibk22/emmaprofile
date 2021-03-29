import React from 'react'
import './search.css'

export default function Search() {
    return (
        <div className="relative">
            <input type='text' className='search-bar  ' value=''
                style={{}}>

            </input>
            <button type='submit' className='search-button absolute flex '
                style={{

                }}>Search </button>

            {/* <form className='search-form absoluteTop flex '
                style={{
                    // top: '8%',
                    zIndex: "1",
                    maxHeight: ''
                }}>
                <div className='relative'
                    style={{ position: 'relative' }}>
                    <input type='text' className='search-bar  ' value=''
                        style={{
                            borderRadius: '999px',
                            padding: '1.4%'
                        }}>
                    </input> </div>

                <div className=''
                    style={{
                        zIndex: "2",
                        marginLeft: '-5.5%',
                    }}>
                    <button type='submit' className='search-button'
                        style={{

                        }}>Search </button>
                </div>
            </form > */}
        </div>
    )
}
