
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';

export function increment () {
    console.log("我是action函数")
    return {
        type:INCREMENT
    }
}
export function decrement () {
    return {
        type:DECREMENT
    }
}
export function reset () {
    return {
        type:RESET
    }
}