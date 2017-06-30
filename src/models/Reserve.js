/**
 * Created by wafer on 2017/6/30.
 */
import moment from 'moment';
import {getResverationList} from '../services/reserve';
export default{
  namespace: 'reserve',
  state:{
    reservationList: [],//访问信息记录表
    orderRegular: 'positive', //default value is positive
    nowDate: ''
  },
  reducers:{
    saveSeservationList(state, {payload}){
      return {...state, ...payload}
    }
  },
  effects: {
    *fetchList({page}, {call, select, put}){
      let reserve = yield select(state =>state.reserve);
      let reservationList = yield call(getResverationList, {page, orderRegular: reserve.orderRegular});
      let nowDate = moment().format('YYYY/MM/DD');
      console.log(nowDate);
      yield put({type: 'saveSeservationList', payload:{reservationList, nowDate}});
    }
  },
  subscriptions: {
    set({dispatch, history}){
      return history.listen(({pathname}) => {
        if(pathname.endsWith('/')){
          dispatch({type: 'fetchList'});
        }
      });
    }
  }
}
