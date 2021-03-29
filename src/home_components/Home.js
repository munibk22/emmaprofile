import React from 'react';
import HomeImg from './HomeImg';
import HomeImgMid from './HomeImgMid'
import Cards from './Cards'
import HomeCarousel from './HomeCarousel'
import '../hpage.css'
import './about.css'
import Footer from '../Footer'
import About from './About'
import Nav from '../Nav';


export default function Home() {
    return (
        <div className="justify " style={{ maxWidth: '100vw' }}>
            <HomeImg />
            {/* <hr className="hrRed" /> */}


            <div className="margintop sticky">
                <Nav />
            </div>

            <div className="flex justify margintop">

                <h1 style={{ width: "" }}>Photo Album</h1>
            </div>

            <div className="homecontainer flex justify margin margintop"
                style={{}}>
                <HomeCarousel />
            </div>

            <div className="flex justify margintop">

                <h1 style={{ width: "" }}>About Me</h1>
            </div>
            <div className="aboutback">
                <div className="margintop flex justify">
                    <About />
                </div>
            </div>


            <div className="alignText flex justify margintop">
                <h1 className="alignText "
                    style={{ width: "" }}>Commercials</h1>
            </div>
            <div className="homecontainer justify margin margintop" style={{}} >
                <Cards />
            </div>

            <div className="flex justify margintop">

                <h1 style={{ width: "" }}>Home</h1>
            </div>

            <div className="relative flex justify aligncontent margintop alignText" style={{ height: "34rem", zIndex: '2', color: 'white', }}>

                <h1 className="absolute"
                    style={{ fontSize: '3rem', fontWeight: '700', zIndex: '2', top: '10%' }}>CASTLE ROCK, COLORADO</h1>

                <div className="justify absolute" style={{ top: "0" }}>
                    <HomeImgMid />

                </div>
            </div>

            <div className="margintop " style={{ width: "99.5vw" }}>
                <Footer />
            </div>

        </div >
    )
}
