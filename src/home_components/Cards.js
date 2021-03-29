import React from 'react'
import '../App.css'
import 'react-bootstrap'
import CloverC from '../pics/cloverc.mp4'
import CloverD from '../pics/cloverd.mp4'
import Germozap from '../pics/Germozap.mp4'


export default function Cards() {




    return (


        <div className="flexwrap justifymedia  "
            style={{

                justifyContent: 'space-between'
            }}
        >


            <div className="relative">


                <div className="componentBox  componentcover threedhover" style={{}} >


                    <div className="" style={{ width: "260px", height: "300px" }}>

                        <video muted autoPlay loop playbackRate="0.3"
                            style={{ height: "250px", outline: 'none' }} >
                            <source src={CloverC} type="video/mp4" />
                        </video>
                    </div>



                    {/* <div className="zindex absolutebottom flexwrap " style={{ fontWeight: "500", color: 'white', fontSize: '1.3rem' }}>
                    Commercial for Clover
                    <a href="https://www.youtube.com/watch?v=q9h6mFoazOk" target="blank" >

                        <btn type="" className="btn btn-danger btn-lg btn-block "
                            style={{ fontSize: ".7em", padding: '1%' }}
                        > Click To View </btn></a>
                </div> */}

                    <div className="zindex absolutebottom flexwrap alignitems justify componenttxtbox"
                        style={{ marginTop: "" }}>
                        <hr className="hrRed2 " />

                    Commercial for Clover
                    <a href="https://www.youtube.com/watch?v=q9h6mFoazOk" target="blank"
                            className="btn btn-primary btn-lg  margin primary "
                            style={{ fontSize: ".7em", padding: '', marginTop: "", }}
                        >
                            Click To View
                    </a>

                        <a href="https://www.clover.com/" target="blank"
                            className="btn btn-danger btn-lg  margin"
                            style={{ fontSize: ".7em", padding: '', marginTop: "", }}
                        >
                            Visit Website
                    </a>
                    </div>

                </div>
            </div>

            <div className="relative">

                <div className="componentBox  threedhover componentcover " style={{



                }} >


                    <div className="" style={{ width: "260px", height: "300px" }}>

                        <video muted autoPlay loop playbackRate=".1"
                            style={{ height: "250px" }} >
                            <source src={Germozap} type="video/mp4" />
                        </video>
                    </div>






                    <div className="zindex absolutebottom flexwrap alignitems justify componenttxtbox" style={{ marginTop: "2%", }}>
                        <hr className="hrRed2 " />
                    Commercial for Germozap

<a href="https://www.youtube.com/watch?v=AjRLxunLnPs" target="blank"
                            className="btn btn-primary btn-lg  margin primary"
                            style={{ fontSize: ".7em", padding: '', marginTop: "", }}
                        >
                            Click To View
                    </a>

                        <a href="https://germozap.com/" target="blank"
                            className="btn btn-danger btn-lg  margin"
                            style={{ fontSize: ".7em", padding: '', marginTop: "", }}
                        >
                            Visit Website
                    </a>
                    </div>
                </div>
            </div>


            <div className="">

                <div className=" componentBox threedhover componentcover " style={{

                    // backgroundImage: { Clover }

                }} >


                    <div className="" style={{ width: "260px", height: "300px" }}>

                        <video muted autoPlay loop playbackRate="0.2"

                            style={{ height: "250px" }} >
                            <source src={CloverD} type="video/mp4" />
                        </video>
                    </div>
                    <div className="zindex absolutebottom flexwrap alignitems justify componenttxtbox"
                        style={{ marginTop: "2%", }}>
                        <hr className="hrRed2 " />


                    Commercial for Clover
                    <a href="https://www.youtube.com/watch?v=q9h6mFoazOk" target="blank"
                            className="btn btn-primary btn-lg  margin primary "
                            style={{ fontSize: ".7em", padding: '', backgroundColor: '' }}
                        >
                            Click To View
                    </a>

                        <a href="https://www.clover.com/" target="blank"
                            className="btn btn-danger btn-lg  margin "
                            style={{ fontSize: ".7em", padding: '', marginTop: "", }}
                        >
                            Visit Website
                    </a>
                    </div>

                </div>


            </div>

            {/* <div className="">
                <video muted autoPlay loop style={{ width: "280px", height: '300px' }} >
                    <source src={Clover} type="video/mp4" />
                </video>
            </div> */}


            {/* <div className="componentBox" />
            <div className="componentBox" />
            <div className="componentBox" /> */}

        </div>

    )
}
