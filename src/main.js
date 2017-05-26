'use strict';

import Vue from 'vue'
import {Row, Col} from 'element-ui'
import App from './App.vue'

Vue.use(Row);
Vue.use(Col);


new Vue({
    el: '#app',
    render: h => h(App)
});

