import React from 'react'
import Loader from 'react-loader-spinner'
import './styles.scss'

export default function () {
    return <div className="loading__container">
        <Loader
            type="Plane"
            color="white"
        />
    </div>
}