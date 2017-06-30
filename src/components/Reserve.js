/**
 * Created by wafer on 2017/6/28.
 */
import React from 'react';
import {Button, Table} from 'antd';

export default ({dispatch, reservationList}) =>{
  const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name1'
    },{
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }];
  return(
    <div>
      <h1>This is Reserve component</h1>
      <hr/>
      <div id="xiaohuTable">A table from xiaohu</div>
      <div id="abaoTable">A table from abao</div>
      <div id="reservationTable">
        <Button type="primary" onClick={()=>{dispatch({type:'reserve/fetchList'})}}>更新列表</Button>
        <Table dataSource={reservationList} columns={columns} rowKey="name"/>
      </div>
    </div>
  );
}
