import React from 'react'
import HomeImg from './HomeImg'
import HomeImgMid from './HomeImgMid'
import Cards from './Cards'
import HomeCarousel from './HomeCarousel'

export default function Home() {
    return (
        <div className="">
            <HomeImg />
            <hr className="hrRed" />

            <div className="homeimgcontainer margin">
                <HomeCarousel />
            </div>


            <div className="homecontainer justify margin">
                <Cards />
            </div>


            <HomeImgMid />



        </div>
    )
}
