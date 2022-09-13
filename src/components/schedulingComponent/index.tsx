import { Form, Radio, Row, Col, Space, Typography } from 'antd'
import styles from './SchedulingComponent.module.css'

const { Paragraph } = Typography

const SchedulingComponent = () => {
  return (
    <div className={styles.schedwrapper}>
      <Paragraph className={styles.schedlabel}>Schedule</Paragraph>
      <Form.Item name="schedule" className={styles.schedradiogrp}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="office-base">Office Base</Radio>
            <Radio value="flexi-time-office">Flexi Time Office</Radio>
            <Radio value="flexi-time-field">Flexi Time Field</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </div>
  )
}

export default SchedulingComponent
