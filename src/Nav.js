import React from 'react'
import './nav.css'
import Homeicon from './pics/homeicon.svg'
import Blogicon from './pics/blogicon.svg'
import Abouticon from './pics/about.svg'
import Contacticon from './pics/about.svg'
import Search from './home_components/Search'

export default function Nav() {
    return (
        <div className="navbar2 flex margin justifyaround aligncontent alignitems " style={{}}>
            <div className="flex" style={{ paddingLeft: '1%' }}>
                <img src={Homeicon} alt="Home by jokokerto from the Noun Project" className="homeicon" />   Home



            </div>



            <div className="flex">
                <img src={Blogicon} alt="Blog by Larea from the Noun Project" className="homeicon" />    Blog


            </div>

            <div className="">

            </div>
            <div className="">
                <Search />
            </div>



            <div className="flex">
                <img src={Abouticon} alt="about by Jae Deasigner from the Noun Project" className="homeicon" />   About
                </div>
            <div className=" " style={{ paddingRight: '5%' }}>

                <div className="flex">
                    <img src={Contacticon} alt="Blog by Larea from the Noun Project" className="homeicon" />         Contact
                </div>

            </div>
        </div>
    )
}
