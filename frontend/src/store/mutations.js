import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './modules/module1'
import { debug } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        module1,

    },
    strict:debug,
    plugins:debug?[createLogger()]:[]
})