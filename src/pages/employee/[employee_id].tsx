import { Form, Input, Button } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEmployeeById } from '../../http-request/employee.request'
import { EmployeeModel, EmployeeLeave } from '../../types/types'
import SubComponent from '../../components/subcomponent'
import { Layout, Table, Col, Row } from 'antd'
import { getLeaveById } from '../../http-request/leave.request'

const EmployeePage: NextPage = () => {
  const [data, setData] = useState<EmployeeModel>()
  const [leaves, setLeaves] = useState<EmployeeLeave>()
  const router = useRouter()
  const columns = [
    {
      title: 'Credit Balance',
      dataIndex: 'creditBalance',
      key: 'creditBalance',
    },
    {
      title: 'Leave Type',
      dataIndex: 'leaveType',
      key: 'leaveType',
    },
  ]

  useEffect(() => {
    const employee_id = router.query.employee_id
    const id = parseInt(employee_id as string)
    getEmployeeById(id).then((e: EmployeeModel) => setData(e))
    console.log(data)
    getLeaveById(id).then((e: EmployeeLeave) => setLeaves(e))
    console.log(leaves)
  }, [])

  return (
    <>
      <div style={{ padding: '20px' }}>
        <Form onFinish={(values) => console.log('@onFinish', values)}>
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          <SubComponent />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </div>
      <Table dataSource={leaves?.leave} columns={columns} />{' '}
    </>
  )
}
export default EmployeePage
