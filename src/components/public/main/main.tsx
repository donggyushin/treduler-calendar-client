import React from 'react'
import './main.scss'
import Header from '../header/header'

const Presenter: React.FC = () => {
    return <div className="main__container">
        <Header />
        <div className="sized_box"></div>
        <p className="animated bounce content">
            The World Best Simple and Light Calendar Progressive Web Application
        </p>

    </div>
}

export default Presenter