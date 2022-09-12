import { Form, Input, Radio, Select } from 'antd'
import { NamePath } from 'antd/lib/form/interface'
import SchedulingComponent from './SchedulingComponent'

const SelectSubComponent = ({
  name,
  label,
}: {
  name: NamePath
  label: string
}) => {
  return (
    <Form.Item label={label} name={name}>
      <Select
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
        ]}
      />
    </Form.Item>
  )
}


export default SelectSubComponent
