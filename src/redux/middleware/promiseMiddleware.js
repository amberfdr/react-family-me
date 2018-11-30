import axios from 'axios';
export default store => next => action => {
    const {dispatch,getState} = store;
    //判断dispatchd的是一个函数，直接进入下一级
    if(typeof action === 'function'){
        dispatch(action,getState);
        return;
    }

    //解析action
    const {
        promise,
        aftersuccess,
        types,
        ...rest
    } = action;
    //没有promise,不是ajax请求，直接进入下一步
    if(!action.promise){
        return next(action);
    }
    //解析type
    const [
        REQUEST,
        SUCCESS,
        FAIL
     ] = types;
    //开始请求的时候，发一个action
    next({
        ...rest,
        type:REQUEST
    })
    //定义请求成功的方法
    const onSuccess = result => {
        next({
            ...rest,
            result,
            type:SUCCESS
        })
        if(aftersuccess){
            aftersuccess(dispatch,getState,result);
        }
    }
    //定义请求失败的方法
    const onRejected = result => {
        next({
            ...rest,
            error,
            type:FAIL
        })
        if(aftersuccess){
            aftersuccess(dispatch,getState,result);
        }
    }
    return promise(axios).then(onSuccess,onRejected).catch(error => {
        console.error('MiddleWare Error',error);
        onRejected(error);
    })
}