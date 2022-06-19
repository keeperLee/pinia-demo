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

    }
})
