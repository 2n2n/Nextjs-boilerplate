import { NextPage } from 'next'
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import { Layout, Table, Col, Row, Button, Image } from 'antd'
import { useEffect, useState } from 'react'
import { Employee, EmployeeModel, GenderEnum } from '../../types/types'
import { getEmployees } from '../../http-request/employee.request'

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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          enim, minima odit neque minus at assumenda qui nobis incidunt illo
          culpa autem, nulla reiciendis cumque doloremque, accusantium quis?
          Minus, enim.
        </p>
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <Row gutter={10}>
            <Col span={5}>
              <Image
                width={250}
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
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
