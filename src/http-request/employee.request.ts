import { EmployeeModel, GenderEnum } from '../types/types'

const data: EmployeeModel[] = [
  { id: 1, name: 'Anthony', position: 'Programmer', gender: GenderEnum.Male, employeeId: 'S-001' },
  { id: 2, name: 'Mark', position: 'Lead Developer', gender: GenderEnum.Male, employeeId: 'S-002' },
  {
    id: 3,
    name: 'Bong',
    position: 'Backend Developer',
    gender: GenderEnum.Male,
    employeeId:'981923'
  },
]

export const getEmployees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(data)
    }, 1000)
   
  })
}

export const getEmployeeById: (id: number) => Promise<EmployeeModel> = (id)  => {
    return new Promise((resolve, reject) => {
        const found = data.find((employee) => employee.id === id)
        setTimeout(() => {
          resolve(found as EmployeeModel)
        }, 1000)
        
    })
}
