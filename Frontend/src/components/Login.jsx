
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    static contextTypes = {
        router: PropTypes.object
    };
    register = () => {
        this.context.router.push('/register')
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSaveLoginInfo } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                handleSaveLoginInfo(values);
                // this.context.router.push("/addTally");
            }
        });
    };

    render() {
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
                            Log in
                        </Button>
                        Or <a href="" onClick={this.register}>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const Login = Form.create()(NormalLoginForm);
export default Login;