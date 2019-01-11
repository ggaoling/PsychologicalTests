import React from 'react';

class AddTally extends React.Component{

    render(){
        const {loginInfo}=this.props;
        console.log(loginInfo)
        return (
            <div>
                <h2>{loginInfo.userName}</h2>
                <h1>{loginInfo.password}</h1>
            </div>
        );
    }
}

export default AddTally;