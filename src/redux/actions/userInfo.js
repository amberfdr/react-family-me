export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL';

function getUserInfoRequest(){
    return{
        type:GET_USER_INFO_REQUEST
    }
}
function getUserInfoSuccess(userInfo){
    return{
        type:GET_USER_INFO_SUCCESS,
        userInfo:userInfo
    }
}
function getUserInfoFail(){
    return{
        type:GET_USER_INFO_FAIL
    }
}

//这里需要redux-thunk 涉及到middleWare中间件
//因为reducer只能处理{type:...}这样的action,不能处理action函数，
//所有redux-thunk的作用：将action函数处理成标准action,然后让reducer处理
export function getUserInfo(){
    return function(dispatch){
        dispatch(getUserInfoRequest());
        return fetch('http://localhost:9000/api/user.json')
        .then((res) => {
            console.log(res);
            return res.json();//转换成json格式
        })
        .then((json) => {
            dispatch(getUserInfoSuccess(json))//返回成功的值
        })
        .catch(() => {
            dispatch(getUserInfoFail())
        })
    }
}