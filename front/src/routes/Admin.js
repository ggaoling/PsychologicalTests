import React from 'react';
import  CommonLayout  from '../components/CommonLayout'
import {Button} from 'antd'
import { connect } from 'dva';
function render(){
    return (
        <Button type="primary">
        primary
        </Button>
    )
}
const Admin=(props)=> {
    return(
    <div>
        <CommonLayout childContent={render()}/>
    </div>
)
}
export default Admin;