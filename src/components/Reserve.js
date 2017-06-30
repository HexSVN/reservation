/**
 * Created by wafer on 2017/6/28.
 */
import React from 'react';
import {Button, Table} from 'antd';
import styles from './Reserve.less'

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
  //add unused code to testing
  const a = 1;
  return(
    <div className={styles['normal']}>
      <h1>This is Reserve component</h1>
      <hr/>
      <div id="xiaohuTable" className={styles['collaborators']}>A table from xiaohu</div>
      <div id="abaoTable" className={styles['collaborators']}>A table from abao</div>
      <div id="reservationTable" className={styles['reservationTable']}>
        <Button type="primary" onClick={()=>{dispatch({type:'reserve/fetchList'})}}>更新列表</Button>
        <Table dataSource={reservationList} columns={columns} rowKey="name"/>
      </div>
    </div>
  );
}
