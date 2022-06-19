import {defineStore} from "pinia";

export const mainStore = defineStore('main',{
    state:()=>{
        return {
            helloWorld:'hello, world!',
            count:0
        }
    },
    getters:{

    },
    actions:{
        changeState(){
            this.count = 100000
            this.helloWorld ='牛呀'
        }
    }
})
