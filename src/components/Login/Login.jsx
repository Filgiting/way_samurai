import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);
const Input = Element("input");

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' name='login'
                       component={Input} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field placeholder='Password' name='password'
                       component={Input} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe'
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {

    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;