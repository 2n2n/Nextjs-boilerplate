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
    id: number
}