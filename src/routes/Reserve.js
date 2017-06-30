/**
 * Created by wafer on 2017/6/28.
 */
import React from 'react';
import {connect} from 'dva';
import ReserveComponent from '../components/Reserve';

const Reserve = ({dispatch, reservationList}) =>{
  return(
    <ReserveComponent dispatch={dispatch} reservationList={reservationList}/>
  );
}

export default connect((state)=>{return {...state,reservationList:state.reserve.reservationList}})(Reserve);
