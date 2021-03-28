import React from 'react'
import HomeImg from './HomeImg'
import HomeImgMid from './HomeImgMid'
import Cards from './Cards'
import HomeCarousel from './HomeCarousel'
import '../hpage.css'
import './about.css'
import Footer from '../Footer'
import Profile from './Profile'

export default function Home() {
    return (
        <div className="justify" style={{ maxWidth: '100vw' }}>
            <HomeImg />
            {/* <hr className="hrRed" /> */}

            <div className="homecontainer flex justify margin margintop"
                style={{}}>
                <HomeCarousel />
            </div>

            <div className="flex justify margintop">

                <h1 style={{ fontWeight: "", width: "" }}>About Me</h1>
            </div>
            <div className="aboutback">
                <div className="margintop flex justify">
                    <Profile />
                </div>
            </div>


            <div className="alignText flex justify margintop">
                <h1 className="alignText ">Commercials</h1>
            </div>
            <div className="homecontainer justify margin margintop" style={{}} >
                <Cards />
            </div>

            <div className="margintop justify">
                <HomeImgMid />

            </div>

            <div className="margintop " style={{ width: "99.5vw" }}>
                <Footer />
            </div>

        </div >
    )
}
