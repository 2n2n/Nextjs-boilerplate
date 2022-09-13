import { Col, Form, Input, Row, Typography } from 'antd'
import React from 'react'
import { addressFields, addressType } from '../../constant/constant'

const { Paragraph, Title } = Typography

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 24 },
  },
}
const FormTest = () => {
  const { Residential, Permanent } = addressType

  return (
    <div>
      <Form {...formItemLayout}>
        {/* Personal Info Component */}

        <Row gutter={10}>
          <Col span={5}>
            <Form.Item
              labelAlign="left"
              label={'Status Of Employment'}
              name={'empStatus'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item
              labelAlign="left"
              label={'Date Of Inactive'}
              name={'dateOfInactive'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item labelAlign="left" label={'Reason'} name={'reason'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              labelAlign="left"
              label={'Status of Appointment'}
              name={'statusAppointment'}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item labelAlign="left" label={'Surname'} name={'surname'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              labelAlign="left"
              label={'First Name'}
              name={'firstname'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              labelAlign="left"
              label={'Middle Name'}
              name={'middlename'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelAlign="left"
              label={'Name Extension'}
              name={'nameExtension'}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={4}>
            <Form.Item
              labelAlign="left"
              label={'Date of Birth'}
              name={'birthday'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              labelAlign="left"
              label={'Place of Birth'}
              name={'placeOfBirth'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              labelAlign="left"
              label={'Civil Status'}
              name={'civilStatus'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item
              labelAlign="left"
              label={'Citizenship'}
              name={['citizenship', 0]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item labelAlign="left" label={' '} name={['citizenship', 1]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={10}>
          {addressFields.map((field, index) => {
            if (field.name[0] === Residential) {
              return (
                <Col span={3}>
                  <Form.Item
                    labelAlign="left"
                    label={field.label}
                    name={field.name}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              )
            }
          })}
        </Row>

        <Row gutter={10}>
          {addressFields.map((field, index) => {
            if (field.name[0] === Permanent) {
              return (
                <Col span={3}>
                  <Form.Item
                    labelAlign="left"
                    label={field.label}
                    name={field.name}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              )
            }
          })}
        </Row>

        {/* GovernmentId Component */}
        <Row gutter={10}>
          <Col span={12}>
            <Form.Item
              labelAlign="left"
              label={'E-mail Address'}
              name={'email'}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item labelAlign="left" label={'TIN No.'} name={'tinNo'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelAlign="left"
              label={'Tax Status'}
              name={'taxStatus'}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        
      </Form>
    </div>
  )
}

export default FormTest
