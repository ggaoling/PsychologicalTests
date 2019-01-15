import {routerRedux} from 'dva/router'
export default {
    namespace: 'user',
    state: {
        userName:'default',
        isAdmin:false,
        history:null,
    },
    effects: {
        *login({ payload }, { call, put }) {
            if (payload.userName == "123" && payload.password == "123") {
                yield put(routerRedux.push('/index'))
                yield put({type:'user/save',payload:{userName:payload.userName,isAdmin:false}})
            }
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    }
}