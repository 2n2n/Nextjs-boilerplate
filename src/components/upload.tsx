import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, Layout, message, Row, Upload } from 'antd'
import { RcFile } from 'antd/lib/upload/interface'
import { useEffect, useState } from 'react'
import { EmployeeModel } from '../types/types'

type UploadProps = {
  employeeId: string | undefined
}

export const UploadComponent = ({ employeeId }: UploadProps) => {
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  return (
    <>
      <div>Employee No.:</div>
      <div style={{ fontSize: 30 }}>{employeeId}</div>

      <div style={{ height: 200, width: 200, borderStyle: 'solid' }}></div>
      <Row gutter={5}>
        <Col>
          <Upload
            accept=".png,.jpg,.jpeg,"
            maxCount={1}
            beforeUpload={beforeUpload}
            //   onChange={()=>{}}
            // name="avatar"
            //  listType="picture-card"
            //   className="avatar-uploader"
              showUploadList={true}
          >
            <Button icon={<UploadOutlined />}>Browse</Button>
          </Upload>
        </Col>
        <Col>
          <Button>Delete</Button>
        </Col>
      </Row>
    </>
  )
}
