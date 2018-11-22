/*使用es6箭头函数*/
var func = src => {
    document.getElementById('app').innerHTML = src;
};
func('我现在使用Babel!');