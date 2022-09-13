import { Form, Input, Button, Radio, Space, Row, Col } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEmployeeById } from '../../http-request/employee.request'
import { EmployeeModel } from '../../types/types'
import SubComponent from '../../components/subcomponent'
import SchedulingComponent from '../../components/schedulingComponent'
import SidePanel from '../../components/sidePanel'
const EmployeePage: NextPage = () => {
  const [data, setData] = useState<EmployeeModel>()
  const router = useRouter()

  useEffect(() => {
    const employee_id = router.query.employee_id
    const id = parseInt(employee_id as string)
    getEmployeeById(id).then((e: EmployeeModel) => setData(e))
  }, [])

  return (
    <Form onFinish={(values) => console.log('@onFinish', values)}>
      <Row gutter={10} style={{ padding: '20px' }}>
        <Col span={5}>
          <SchedulingComponent />
        </Col>
        <Col span={17}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit at vero eveniet alias asperiores doloribus placeat modi quisquam explicabo officia quaerat nobis veniam aperiam repudiandae similique expedita, pariatur repellat.
        </Col>
        <Col span={2}>
          <SidePanel />
        </Col>
      </Row>
    </Form>
  )
}
export default EmployeePage
