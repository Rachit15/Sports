import React from 'react';
import Button from 'react-bootstrap/Button';

import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';
const ForgetPassword = () => {
    return (
        <>
            <div className="form-container">
                <Form layout="vertical" className="register-form">
                    <h3 className="text-center">Login Form</h3>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required></Input>
                    </Form.Item>


                    <button className="btn btn-warning" style={{ background: "black", color: "pink", marginLeft: "60px" }} type="submit">Submit</button>
                </Form>
            </div>
        </>
    )
}

export default ForgetPassword;