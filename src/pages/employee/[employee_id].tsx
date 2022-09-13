import { Form, Input, Button, Skeleton } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEmployeeById } from '../../http-request/employee.request'
import { EmployeeModel } from '../../types/types'
import SubComponent from '../../components/subcomponent'
import { UploadComponent } from '../../components/uploadComponent/Upload'

const EmployeePage: NextPage = () => {
  const [data, setData] = useState<EmployeeModel>()
  const router = useRouter()

  useEffect(() => {
    const employee_id = router.query.employee_id
    const id = parseInt(employee_id as string)
    getEmployeeById(id).then((e: EmployeeModel) => setData(e))
  }, [router.query.employee_id])

  if (!data) {
    return <Skeleton />
  }
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div style={{ padding: '20px' }}>
        <Form onFinish={(values) => console.log('@onFinish', values)}>
          {/* <Form.Item label="name" name="name">
            <Input />
          </Form.Item> */}
          {/* <SubComponent /> */}
          {/* <Button htmlType="submit">Submit</Button> */}
          <UploadComponent data={data} />
        </Form>
      </div>
    </>
  )
}
export default EmployeePage
