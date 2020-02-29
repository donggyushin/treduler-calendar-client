import React from 'react'
import './main.scss'
import Header from '../header/header'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const Presenter: React.FC = () => {
    return <div className="main__container">
        <Header />
        <div className="sized_box"></div>
        <p className="content">
            <Typist>
                The World Best Simple and Light Calendar Progressive Web Application ^_^
            </Typist>
        </p>
        <div className="sized_box_height"></div>
        <div className="button__container">
            <Link to="/sign-in">
                <button className="animated rubberBand delay-2s">
                    GET STARTED
            </button>
            </Link>
        </div>
    </div>
}

export default Presenter