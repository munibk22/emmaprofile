import React from 'react'
import e11 from '../pics/e10.jpg'
export default function About() {
    return (
        <div className="homecontainer flex align relative " style={{}}>

            <div className="flexwrap  alignitems relative justify relative" style={{ marginLeft: "9%", width: "100%" }}>
                <span style={{
                    zIndex: "2",
                    fontWeight: '800',
                    listStyle: 'none'
                }}>Golfing
                    
                    {/* <ul style={{
                        listStyle: 'none'
                    }} >    </ul> */}

                    <li>Mother</li>
                    <li>Reading</li>
                    <li>Golfing</li>

                    <li> Golfing</li>
                    <li></li>
                </span>
                <img src={e11} alt=""
                    style={{
                        borderRadius: '50%',
                        boxShadow: "3px 3px 2px #01a6e7, -3px 3px 2px #01a6e7",
                        width: "59%",
                        maxWidth: "50vw",
                        maxHeight: "520px",
                        // marginLeft: '10%',
                        // height: '90%',
                        minWidth: "300px",
                        float: 'left',
                        zIndex: "2"
                    }}

                />

            </div>
            <div className="flexwrap absolute bannertxt banner fontsmall " style={{
                fontWeight: "600",
                color: ' white ',
                width: "80vw",
                maxWidth: "850px",
                marginLeft: '',
                backgroundImage: "linear-gradient(to right, #f85e21 0%, #f85e21 ,#ff814e,#f19e7d 100%)",
                // backgroundColor: '#ea5e32',
                minHeight: "15px",
                height: "140px",
                top: '50%',
                // fontSize: '50%',
                zIndex: "1",
                letterSpacing: ".03em"

            }}>

                <ul>
                    <div className="">

                    </div>

                    <div className="">

                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>


                </ul>
            </div>
            {/* <div className="absolute alignitems flexwrap overflow fontsmall hide" style={{
                maxWidth: "180px",
                minWidth: '10px',
                minHeight: '10px',
                zIndex: '1',
                right: '-8%',
                height: "100%",
                backgroundImage: "linear-gradient(to bottom,  #f19e7d 0%,  #ff7037  , #f85e21, #f85e21, #f85e21,#ff7037, rgb(241, 158, 125),white  100%)",
                // backgroundColor: "grey",

                letterSpacing: ".02em",
                borderRadius: "5px"
                // textAlign: "end",

                // bottom: "0",
                // top: "0",




            }}>
                <ul style={{
                    // color: '#0079af',
                    color: 'white',
                    fontWeight: '600',

                }}>

                    Reprehenderit aute sit magna
                    occaecat. Occaecat laboris consequat ea dolor duis ullamco est eiusmod. Ea commodo eiusmod sit adipisicing
                    dolor quis laborum sunt.

</ul>
            </div> */}



        </div>
    )
}
