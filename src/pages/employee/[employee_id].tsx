import { Form, Input, Button, Radio, Space, Row, Col } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEmployeeById } from '../../http-request/employee.request'
import { EmployeeAvatar, EmployeeModel } from '../../types/types'
import SubComponent from '../../components/subcomponent'
import { UploadComponent } from '../../components/upload'

import SchedulingComponent from '../../components/schedulingComponent'
import SidePanel from '../../components/sidePanel'
import FormTest from '../form/form-test'

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 24 },
  },
}

const EmployeePage: NextPage = () => {
  const [data, setData] = useState<EmployeeModel>()
  const router = useRouter()

  useEffect(() => {
    const employee_id = router.query.employee_id
    const id = parseInt(employee_id as string)
    getEmployeeById(id).then((e: EmployeeModel) => setData(e))
  }, [router.query.employee_id])

  return (
    <Form onFinish={(values) => console.log('@onFinish', values)} {...formItemLayout}>
      <Row gutter={10} style={{ padding: '20px' }}>
        <Col span={5}>
          <UploadComponent employeeId={data?.employeeId}/>
          <SchedulingComponent />
        </Col>
        <Col span={17} style={{  background: '#fff', padding: "20px 20px"}}>
        <FormTest />
        </Col>
        <Col span={2}>
          <SidePanel />
        </Col>
      </Row>
    </Form>
  )
}
export default EmployeePage
