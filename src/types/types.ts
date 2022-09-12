export enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
}
export type Employee = {
  name: string
  position: string
  gender: GenderEnum
}

export type EmployeeModel = Employee & {
  id: number
}

export type Leave = {
  leaveType: LeaveEnum
  creditBalance: number
}

export enum LeaveEnum {
  SL = 'Sick Leave',
  SLP = 'Special Leave',
  VL = 'Vacation Leave',
}

export type EmployeeLeave = {
  employeeId: number
  leave: Leave[]
}
