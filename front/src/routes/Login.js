import React from 'react'
import { Form, Icon, Input, Button, Checkbox, } from 'antd'
import { connect } from 'dva';
import {routerRedux} from 'dva/router'
import styles from '../assets/index.css';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = () => {
        const {dispatch,form}=this.props;
        const data = form.getFieldsValue();
        dispatch({type:'login/login',payload:data})

        if (data.userName == "123" && data.password == "123"){
            console.log('true')
            // dispatch(routerRedux.push({pathname:'/index'}));
        }
           
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 800 }}>
                <Form  className={styles.loginForm}>
                    <Form.Item >
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
                        <Button type="primary" onClick={this.handleSubmit} className={styles.loginFormButton}>
                            Log in
                        </Button>
                        Or <a href="" onClick={this.register}>register now!</a>
                    </Form.Item>
                </Form>
            </div>

        )
    }

}
const Login = Form.create()(NormalLoginForm);
export default connect(({user})=>({user}))(Login)