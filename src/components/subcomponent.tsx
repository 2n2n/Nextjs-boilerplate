import { Form, Input } from 'antd'
import SelectSubComponent from './selectSubComponent'

const fields = [
    { name: ['select', 0], label: 'Select 1 Question' },
    { name: ['select', 1], label: 'Select 2 Question' },

]
const SubComponent = () => {
  return (
    <>
      <Form.Item label={'SubComponent'} name="subcomponent">
        <Input />
      </Form.Item>
      { fields.map((field, key) => <SelectSubComponent {...field} key={key}/>)}
    </>
  )
}

export default SubComponent
