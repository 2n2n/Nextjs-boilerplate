import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, Layout, message, Row, Upload } from 'antd'
import {
  InternalUploadFile,
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/lib/upload/interface'
import { info } from 'console'
import Image from 'next/image'
import { ReactFragment, useState } from 'react'
import { EmployeeModel } from '../types/types'

export const UploadComponent: React.FC<{ data: EmployeeModel }> = ({
  data,
}) => {
  const [imageUrl, setImageUrl] = useState<string>('')
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

  // base
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  // handle
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setImageUrl(url)
      })
    }
  }

  return (
    <>
      <div>Employee No.:</div>
      <div style={{ fontSize: 30 }}>{data.employeeId}</div>

      <div style={{ height: 200, width: 200, borderStyle: 'solid' }}>
        {imageUrl ? (
          <Image
            height={200}
            width={200}
            layout="responsive"
            objectFit="cover"
            src={imageUrl as string}
            alt="Preview"
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            NO IMAGE SELECTED
          </div>
        )}
      </div>
      <Row gutter={5}>
        <Col>
          <Upload
            accept=".png,.jpg,.jpeg,"
            maxCount={1}
            beforeUpload={beforeUpload}
            name="avatar"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
          >
            <Col>
              <Button icon={<UploadOutlined />}>Browse</Button>
            </Col>
          </Upload>
        </Col>
        <Col>
          <Button onClick={() => setImageUrl('')}>Delete</Button>
        </Col>
      </Row>
    </>
  )
}
