import React from 'react';
import { Form, Radio, Icon, Checkbox } from 'antd'

class AddTally extends React.Component {

    render() {
        // const {data}=this.props;
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const data = [
            {
                qname: 'queque1:',
                qid: '1',
                qoption: ['1', '2', '3', '4'],
                qtype: 'T',
            },
            {
                qname: 'queque2:',
                qid: '2',
                qoption: ['1', '2', '3', '4'],
                qtype: 'T',
            },
            {
                qname: 'queque3:',
                qid: '3',
                qoption: ['1', '2', '3', '4', '5'],
                qtype: 'F',
            }
        ]
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    {data.map((item, index) => (
                        <FormItem {...formItemLayout} key={index}>
                            <p>{index + 1}.{item.qtype == 'F' ? '(多选)' : ''} {item.qname}</p>
                            {item.qtype === 'T' ? <div>{getFieldDecorator(item.qid)(
                                <Radio.Group>
                                    {item.qoption.map((o, index) => <Radio value={o} key={index}>{o}</Radio>)}
                                </Radio.Group>
                            )}</div> :
                                <div>
                                    {getFieldDecorator(item.qid)(
                                        <Checkbox.Group style={{ width: "100%" }}>
                                            {item.qoption.map((o, index) => <Checkbox value={o} key={index}>{o}</Checkbox>)}
                                        </Checkbox.Group>
                                    )}
                                </div>
                            }

                        </FormItem>
                    ))}

                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'questions' })(AddTally);