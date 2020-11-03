import Vue from 'vue'
// BUS作为一个中转站,实现非父子之间组件之间的通信
// 使用 Event Bus,bus可根据组件之间通信的方法进行数据传递
// bus.$emit("collapse")是传递参数,bus.$on("collapse")是接受传递的参数
// 参数collapse可是别的名字,但是必须一致  
const bus = new Vue()

export default bus
