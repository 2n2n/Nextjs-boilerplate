import { NextPage } from 'next'
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import { Layout, Table, Col, Row, Button } from 'antd'
import { useEffect, useState } from 'react'
import { Employee, EmployeeModel, GenderEnum } from '../../types/types'
import { getEmployees } from '../../http-request/employee.request'
import ActionBar from '../../components/actionbar'

const { Sider, Content } = Layout

const EmployeePage: NextPage = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (text: string, record: Employee, index: number) => {
        console.log(record)
        return record.gender
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'action',
      render: (text: string, record: Employee, index: number) => {
        return (
          <Link href={`/employee/${text}`}>
            <Button icon={<SearchOutlined />}>View</Button>
          </Link>
        )
      },
    },
  ]
  const [employees, setEmployees] = useState<EmployeeModel[]>([])
  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data as EmployeeModel[])
    })
  }, [])

  return (
    <>
      <Sider width={200}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        enim, minima odit neque minus at assumenda qui nobis incidunt illo culpa
        autem, nulla reiciendis cumque doloremque, accusantium quis? Minus,
        enim.
        <ActionBar/>
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <Row gutter={10}>
            <Col span={5}>
              <Button type="primary" block>
                Add Employee
              </Button>
            </Col>
            <Col span={19}>
              <Table dataSource={employees} columns={columns} />{' '}
            </Col>
          </Row>
          
        </Content>
      </Layout>
    </>
  )
}

export default EmployeePage
