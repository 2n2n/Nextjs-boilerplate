import { Form, Input, Layout, Radio, RadioChangeEvent, Select, Space } from 'antd'
import { NamePath } from 'antd/lib/form/interface'
import React, { useState } from 'react';

  
const SchedulingComponent: React.FC = () => {
    const [value, setValue] = useState(1);
  
    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Office Base</Radio>
          <Radio value={2}>Office Flexi-Time</Radio>
          <Radio value={3}>Flexi-Time</Radio>
        </Space>
      </Radio.Group>
    );
  };

export default SchedulingComponent
