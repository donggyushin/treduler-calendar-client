import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './styles.scss'

export default function () {
    return (
        <div className="public__header">
            <div className="left">
                <Link to="/" style={{
                    textDecoration: 'none'
                }}>
                    <h1>Treduler</h1>
                </Link>
            </div>
            <div className="right">
                <Link to="/sign-up" style={{
                    textDecoration: "none"
                }}>
                    <Button color="primary">sign up</Button>
                </Link>
                <Link to="/sign-in" style={{
                    textDecoration: "none"
                }}>
                    <Button color="primary">sign in</Button>
                </Link>
            </div>
        </div>
    )
}