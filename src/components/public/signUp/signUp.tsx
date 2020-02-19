import React from 'react'
import Header from '../header/header'
import './styles.scss'
import { useFormik } from 'formik'
import { TextField, Button } from '@material-ui/core'

const validate = (values: any) => {
    const errors: any = {
    };
    console.log('values: ', values)
    if (!values.email) {
        errors.email = 'Required';
    } else if (!isEmail(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 2) {
        errors.name = 'name should contain at least two characters'
    }

    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!isCelluar(values.phone)) {
        errors.phone = 'Invalid phone number format'
    } else if (values.phone.length < 10) {
        errors.phone = 'Too short'
    } else if (values.phone.length > 11) {
        errors.phone = 'Too long'
    }

    if (!values.password1) {
        errors.password1 = 'Required'
    } else if (values.password1.length < 6) {
        errors.password1 = 'Password should container at least 6 characters'
    }

    if (!values.password2) {
        errors.password2 = 'Required'
    } else if (values.password1 !== values.password2) {
        errors.password2 = 'Double check your password'
    }

    return errors


}

const Presenter: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phone: '',
            password1: '',
            password2: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <div className="public__sign_up">
        <Header />
        <div className="logo__container">
            <h1 className="logo">Treduler</h1>
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
                    id="name"
                    name="name"
                    type="name"
                    label="name"
                    onChange={formik.handleChange}
                    fullWidth={true}
                    value={formik.values.name}
                />
            </div>
            <div className="error_message">
                {formik.errors.name ? formik.errors.name : ""}
            </div>
            <div className="row">
                <TextField
                    id="phone"
                    name="phone"
                    type="phone"
                    label="phone"
                    onChange={formik.handleChange}
                    fullWidth={true}
                    value={formik.values.phone}
                />
            </div>
            <div className="error_message">
                {formik.errors.phone ? formik.errors.phone : ""}
            </div>
            <div className="row">
                <TextField
                    id="password1"
                    name="password1"
                    label="password"
                    type="password"
                    onChange={formik.handleChange}
                    fullWidth={true}
                    value={formik.values.password1}
                />
            </div>
            <div className="error_message">
                {formik.errors.password1 ? formik.errors.password1 : ""}
            </div>
            <div className="row">
                <TextField
                    id="password2"
                    name="password2"
                    type="password"
                    label="double check password"
                    onChange={formik.handleChange}
                    fullWidth={true}
                    value={formik.values.password2}
                />
            </div>
            <div className="error_message">
                {formik.errors.password2 ? formik.errors.password2 : ""}
            </div>
            <div className="button__container">
                <Button type="submit" color="primary">submit</Button>
            </div>

        </form>
    </div>
}

function isEmail(asValue: string) {

    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	

}

function isCelluar(asValue: string) {

    var regExp = /^[0-9]+$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴

}



export default Presenter