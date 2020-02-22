import React, { useState } from 'react'
import Header from '../header/header'
import './styles.scss'
import { useFormik } from 'formik'
import { TextField, Button } from '@material-ui/core'
import axios from 'axios'
import Loading from 'components/global/loading/loading'
import Modal from 'components/global/dialog/dialog'
import { END_POINT } from 'consts/endpoint'
import { useDispatch } from 'react-redux'
import { userLogin } from 'actions/user'
import { Redirect } from 'react-router-dom'

const validate = (values: any) => {
    const errors: any = {
    };
    if (!values.email) {
        errors.email = 'Required';
    } else if (!isEmail(values.email)) {
        errors.email = 'Invalid email format'
    }


    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Password should container at least 6 characters'
    }


    return errors


}

const Presenter: React.FC = () => {

    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validate,
        onSubmit: values => {
            requestLogin(values)
        },
    });

    if (redirect) {
        return <Redirect to="/" />
    } else {
        return <div className="public__sign_up">
            <Header />
            <div className="logo__container">
                <h1 className="animated rubberBand logo">Treduler</h1>
                <span className="content">sign up</span>
            </div>
            <div className="sized_box"></div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="email"
                        onChange={formik.handleChange}
                        fullWidth={true}
                        value={formik.values.email}
                    />
                </div>
                <div className="error_message">
                    {formik.errors.email ? formik.errors.email : ""}
                </div>
                <div className="row">
                    <TextField
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        onChange={formik.handleChange}
                        fullWidth={true}
                        value={formik.values.password}
                    />
                </div>
                <div className="error_message">
                    {formik.errors.password ? formik.errors.password : ""}
                </div>
                <div className="button__container">
                    <Button type="submit" color="primary">submit</Button>
                </div>
            </form>
            {loading && <Loading />}
            {modal && <Modal
                title={"Warning"}
                text={"Please check again your password and email"}
                callBack={() => {
                    setModal(false)
                }}
            />}
        </div>
    }




    function requestLogin(values: {
        email: string
        password: string
    }) {
        setLoading(true)
        const { email, password } = values;
        axios.post(`${END_POINT}/user/login`, {
            email,
            password
        })
            .then(res => res.data)
            .then(data => {
                const { email, profile, name, phone, jwt } = data as {
                    email: string
                    profile: string
                    name: string
                    phone: string
                    jwt: string
                }

                setLoading(false)
                setRedirect(true)
                dispatch(userLogin(email, profile, profile, phone, jwt))
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
                setModal(true)
            })
    }
}



function isEmail(asValue: string) {

    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	

}






export default Presenter