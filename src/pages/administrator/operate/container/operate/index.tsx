import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const OperateContainer = () => {
  return (
    <div>
      <Collapse bordered={true} defaultActiveKey={['1']}>
        <Panel header='This is panel header 1' key='1'>
          <div>dsads</div>
        </Panel>
        <Panel header='This is panel header 2' key='2'>
          <div>dsa</div>
        </Panel>
        <Panel header='This is panel header 3' key='3'>
          <div>dsads</div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default OperateContainer;
