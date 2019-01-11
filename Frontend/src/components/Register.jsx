
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalRegisterForm extends React.Component{
    static contextTypes = {
        router: PropTypes.object
    };
    login=()=>{
        this.context.router.push("/")
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                        Or <a href="" onClick={this.login}>login now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const Register = Form.create()(NormalRegisterForm);
export default Register;