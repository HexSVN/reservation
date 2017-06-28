/**
 * Created by wafer on 2017/6/28.
 */
import React from 'react';
import {connect} from 'dva';
import ReserveComponent from '../components/Reserve';
const Reserve = () =>{
  return(
    <ReserveComponent/>
  );
}

export default connect((state)=>state)(Reserve);
