import React from 'react';
import { Form, Radio, Icon } from 'antd'

class AddTally extends React.Component {

    render() {
        // const {data}=this.props;
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const data = {
            qname: 'queque:',
            qid: 123,
            qoption: ['1', '2', '3', '4']
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout}>
                        <p>{data.qname}</p>
                        {qid = data.qid && getFieldDecorator({ qid })(
                            <Radio.Group>
                                {data.qoption.map(o=><Radio value={o}>{o}</Radio>)}
                            </Radio.Group>
                        )}
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default AddTally;