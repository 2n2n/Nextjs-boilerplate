import { CloseOutlined, SaveOutlined, SyncOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

const SidePanel = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Button type="primary" block htmlType='submit' icon={<SaveOutlined />}>Save</Button>
      <Button type="primary" icon={<SyncOutlined />} block>
        Refresh
      </Button>
      <Button type="primary" icon={<CloseOutlined />} block>
        Close
      </Button>
    </Space>
  )
}

export default SidePanel
