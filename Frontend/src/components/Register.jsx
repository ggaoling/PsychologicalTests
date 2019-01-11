
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
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="密码" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <a className="register" onClick={this.login}>已有账号！前去登陆</a>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            注册
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const Register = Form.create()(NormalRegisterForm);
export default Register;