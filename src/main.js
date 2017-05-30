'use strict';

import Vue from 'vue'
import {Row, Col, Autocomplete} from 'element-ui'
import App from './App.vue'

Vue.use(Row);
Vue.use(Col);
Vue.use(Autocomplete);


new Vue({
    el: '#app',
    render: h => h(App)
});

