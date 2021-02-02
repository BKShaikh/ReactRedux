import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { connect } from "react-redux";
import {
    getMemberLoading,
    singleMemberData
} from "../selector";
import {
    loadSingleMember,
    UpdateSingleMember,
    AddSingleMember
} from "../Thunk/MemberThunk";

const MemberView = props => {
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = (values) => {
        console.log('Success:', values);
        if (!addMemeber) {
            props.onUpdateMember(props.match.params.id, values, props.history)
        } else {
            props.onAddMember(values, props.history)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const editable = props.match.params.slug === 'view' ? true : false;
    const addMemeber = props.match.params.slug === 'add' ? true : false;
    useEffect(() => {
        if (!addMemeber) {
            props.startLoadingMember(props.match.params.id, form)
        }
    }, []);

    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={props.isProcessLoading}>
            <Form key={props.match.params.id} form={form}
                {...layout}
                style={{
                    padding: '30vh',
                    alignItems: 'center'
                }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Member Name"
                    name="memberName"

                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={editable} />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="memberAge"
                    rules={[{ required: true, message: 'Please input your Age!' }]}
                >
                    <Input disabled={editable} />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                //rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={editable} />
                    {/* value={props.membersData.createdAt === '' ? props.membersData.createdAt : ''} */}
                </Form.Item>
                {addMemeber ? null :
                    <Form.Item
                        label="Created On"
                        name="createdAt"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input disabled/>

                    </Form.Item>
                }
                {
                    props.match.params.slug === 'view' ? null :
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                {props.match.params.slug === 'add' ? 'ADD' : 'UPDATE'}
                            </Button>
                        </Form.Item>
                }
            </Form>
        </Spin>
    );
};


const mapStateToProps = state => ({
    isProcessLoading: getMemberLoading(state),
    membersData: singleMemberData(state),

});

const mapDispatchToProp = dispatch => ({
    startLoadingMember: (id, form) => dispatch(loadSingleMember(id, form)),
    onUpdateMember: (memberId, form, history) => dispatch(UpdateSingleMember(memberId, form, history)),
    onAddMember: (form, history) => dispatch(AddSingleMember(form, history)),
});

export default connect(mapStateToProps, mapDispatchToProp)(MemberView);