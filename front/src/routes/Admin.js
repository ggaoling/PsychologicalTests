import React from 'react';
import CommonLayout from '../components/CommonLayout'
import { Button } from 'antd'
import { connect } from 'dva';
function contentRender() {
    return (
        <Button type="primary">
            primary
        </Button>
    )
}
class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    handleChange=()=>{
        const {dispatch}=this.props;
        dispatch({
            type:'user/save',
            payload:{
                userName:'1234'
            }
        })
    }
    render() {
        const {user}=this.props;
        const{userName}=user;
        return (
            <div>
                <span>welcome {userName}</span>
                <br/>
                <button onClick={this.handleChange}>click</button>
                <CommonLayout childContent={contentRender()} userName={userName}/>
            </div>
        )
    }

}

export default connect(({ user }) => ({ user }))(Admin);