import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL
} from 'actions/userInfo';

const initState = {
    isLoading:true,
    userInfo:{},
    errorMsg:''
};

export default function userInfo(state=initState,action){
    
    switch(action.type){
        case GET_USER_INFO_REQUEST:
        return{
            ...state,//与Object.assign({},state,{})效果一样，合并新旧state成为一个对象
            isLoading:true,
            userInfo:{},
            errorMsg:''
        };
        case GET_USER_INFO_SUCCESS:
        return{
            ...state,
            isLoading:false,
           // userInfo:action.userInfo,
            userInfo:action.result.data,
            errorMsg:''
        };
        case GET_USER_INFO_FAIL:
        return{
            ...state,
            isLoading:true,
            userInfo:{},
            errorMsg:'请求错误'
        };
        default:
        return state;
    }
}