import { NextPage } from "next"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { getEmployeeById } from "../../http-request/employee.request"
import { EmployeeModel } from "../../types/types"

const EmployeePage: NextPage = () => {
    const [data, setData] = useState<EmployeeModel>()
    const router = useRouter()

    useEffect(() => {
        const employee_id = router.query.employee_id
        const id = parseInt(employee_id as string)
        getEmployeeById(id)
        .then((e: EmployeeModel) => setData(e))
    }, [])

    return (
        <>
            <h1>Hello world! with {JSON.stringify(data)}</h1>
        </>
    )
}
export default EmployeePage 