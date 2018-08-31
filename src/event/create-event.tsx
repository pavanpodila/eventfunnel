import * as React from 'react';
import Form from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export class CreateEvent extends React.Component {
    public render() {
        return (
            <Form>
                <Form.Item label={'Name'} {...formItemLayout}>
                    <Input type={'text'} />
                </Form.Item>
            </Form>
        );
    }
}
