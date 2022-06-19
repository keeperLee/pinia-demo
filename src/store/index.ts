import {defineStore} from "pinia";

export const mainStore = defineStore('main',{
    state:()=>{
        return {
            helloWorld:'hello, world!',
            count:0,
            phone:13343243241
        }
    },
    getters:{
        phoneHidden(state){
            return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')
        }
    },
    actions:{
        changeState(){
            this.count = 100000
            this.helloWorld ='牛呀'
        }
    }
})
