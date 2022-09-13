import { EmployeeLeave, LeaveEnum } from '../types/types'

export const leaveData: EmployeeLeave[] = [
  {
    employeeId: 1,
    leave: [
      { creditBalance: 20, leaveType: LeaveEnum.SL },
      { creditBalance: 20, leaveType: LeaveEnum.SLP },
      { creditBalance: 20, leaveType: LeaveEnum.VL },
    ],
  },
  {
    employeeId: 2,
    leave: [
      { creditBalance: 20, leaveType: LeaveEnum.SL },
      { creditBalance: 20, leaveType: LeaveEnum.SLP },
      { creditBalance: 20, leaveType: LeaveEnum.VL },
    ],
  },
  {
    employeeId: 3,
    leave: [
      { creditBalance: 20, leaveType: LeaveEnum.SL },
      { creditBalance: 20, leaveType: LeaveEnum.SLP },
      { creditBalance: 20, leaveType: LeaveEnum.VL },
    ],
  },
]

export const getLeaveCredits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leaveData)
    }, 1000)
  })
}

export const getLeaveCreditsByEmployeeId: (
  id: number
) => Promise<EmployeeLeave> = (id) => {
  return new Promise((resolve, reject) => {
    const found = leaveData.find(
      (employeeLeave) => employeeLeave.employeeId === id
    )
    setTimeout(() => {
      resolve(found as EmployeeLeave)
    }, 1000)
  })
}
