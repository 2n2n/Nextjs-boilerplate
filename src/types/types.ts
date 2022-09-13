export enum GenderEnum {
    Male = 'Male',
    Female = 'Female'
}
export type Employee = {
    name: string;
    position: string;
    gender: GenderEnum
}

export type EmployeeModel = Employee & {
  employeeId?: string
  photo?: string
  id: number
}

export type EmployeeAvatar = EmployeeModel & { 
    employeeId: string
    photo?: string
}