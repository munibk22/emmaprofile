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
import { Button } from 'react-bootstrap'



export default function Home() {
    return (
        <div className="justify " id="top" style={{ maxWidth: '100vw' }}>



            <div className="a relative"
                style={{
                    height: '100vh',
                    maxHeight: "1000px"
                    // width: '100vw', 
                }}>
                <HomeImg />
            </div>

            {/* <hr className="hrRed" /> */}


            <div className=" absolute flex sticky">
                <Nav />
            </div>


            <div className="flex justify margintop">

                <h1 style={{ fontWeight: '600' }}>Photo Album</h1>
            </div>


            <div className="homecontainer flex justify margin margintop"
                style={{}}>
                <HomeCarousel />
            </div>

            {/* 
            <div className="absolute flex " style={{ width: '100vw' }}>
                <hr className="hrblue">

                </hr>
            </div>

            <div className="absolute flex  " style={{ width: '100vw', justifyContent: 'flex-end' }}>
                <hr className="hrblue">

                </hr>
            </div> */}

            <div className="flex justify margintop">

                <h1 style={{ fontWeight: '600' }}>About Me</h1>
            </div>

            <div className="aboutback">
                <div className="margintop flex justify">
                    <About />
                </div>
            </div>




            <div className="alignText flex justify margintop">
                <h1 className="alignText "
                    style={{ fontWeight: '600' }}>Commercials</h1>
            </div>
            <div className="homecontainer justify margin margintop" style={{}} >
                <Cards />
            </div>

            <div className="flex justify margintop15">

                <h1 style={{ fontWeight: '600' }}>Home</h1>
            </div>

            <div className="relative flex justify aligncontent  alignText margintop" style={{
                // height: "34rem",
                zIndex: '2',
                color: 'white',
                bottom: '0px',
                width: '100%'
            }}>

                <h1 className="absolute"
                    style={{ fontSize: '3rem', fontWeight: '600', zIndex: '2', top: '10%' }}>CASTLE ROCK, COLORADO</h1>


                <div className="justify absolute" style={{ top: "0" }}>
                    <HomeImgMid top="#top" />

                </div>


                <div className="absolute"
                    href="#top"
                    style={{
                        top: "350px",
                        zIndex: '2',
                        display: 'inline-block'
                    }}
                >
                    <a variant="primary" className="btn btn-primary" href="#top">Back to Top&#8593;

                    </a>
                </div>
            </div>

            {/* <hr className="hrblue">

            </hr> */}
            {/* <div className=" " style={{ width: "99.5vw" }}>
                <Footer />
            </div> */}

        </div >
    )
}
