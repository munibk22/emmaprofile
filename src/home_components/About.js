import React from 'react'
import e11 from '../pics/e10.jpg'
export default function About() {
    return (
        <div className="homecontainer flex align relative " style={{}}>

            <div className="flexwrap  alignitems relative justify relative" style={{ marginRight: "", width: "100%" }}>
                <img src={e11} alt=""
                    style={{
                        borderRadius: '50%',
                        boxShadow: "3px 3px 2px #01a6e7, -3px 3px 2px #01a6e7",
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
                fontWeight: "700",
                color: ' white ',
                width: "80vw",
                maxWidth: "850px",
                marginLeft: '',
                backgroundImage: "linear-gradient(to right, #f85e21 0%, #f19e7d 100%)",
                // backgroundColor: '#ea5e32',
                minHeight: "15px",
                maxHeight: "150px",
                top: '50%',
                // fontSize: '50%',
                zIndex: "1",
                letterSpacing: ".2em"

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
            <div className="absolute alignitems flexwrap overflow" style={{
                maxWidth: "200px",
                zIndex: '1',
                right: '-6%',
                height: "100%",
                textAlign: "end",

                // bottom: "0",
                // top: "0",




            }}>
                <ul style={{ color: 'rgb(54, 54, 54)', fontWeight: '700' }}>

                    Reprehenderit aute sit magna
                    occaecat. Occaecat laboris consequat ea dolor duis ullamco est eiusmod. Ea commodo eiusmod sit adipisicing
                    dolor quis laborum sunt.

</ul>
            </div>


        </div>
    )
}
