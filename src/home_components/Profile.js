import React from 'react'
import e11 from '../pics/e10.jpg'
export default function Profile() {
    return (
        <div className="homecontainer flex align relative " style={{}}>

            <div className="flexwrap  alignitems relative justify relative" style={{ marginRight: "", width: "100%" }}>
                <img src={e11} alt=""
                    style={{
                        borderRadius: '50%',
                        // boxShadow: "3px 3px 2px #006ec5, -3px -3px 2px #006ec5",
                        width: "55%",
                        maxWidth: "50vw",
                        maxHeight: "520px",
                        // marginLeft: '10%',
                        height: '90%',
                        float: 'left',
                        zIndex: "2"
                    }}

                />

            </div>
            <div className="flexwrap absolute bannertxt banner " style={{
                fontWeight: "500",
                color: 'white  ',
                width: "80vw",
                maxWidth: "850px",
                marginLeft: '',
                backgroundColor: '#ff3d00',
                minHeight: "15px",
                maxHeight: "150px",
                top: '50%',
                // fontSize: '50%',
                zIndex: "1"

            }}>

                <ul>
                    <div className="">
                        Mother
</div>

                    <div className="">
                        Daughter
    </div>
                    <div className="">
                        Reading
</div>
                    <div className="">
                        Travelling
</div>


                </ul>
            </div>


            {/* <div className="align" style={{ color: 'white', width: "100%" }}>

                <ul>
                    <h1 style={{ fontWeight: "800", width: "" }}>About Me:</h1>
                    <div className="">
                        Mother and Daughter
    </div>
                    <div className="">
                        Reading
        </div>
                    <div className="">
                        Travelling
            </div>


                </ul>
            </div> */}

        </div>
    )
}
