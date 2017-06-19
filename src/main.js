'use strict';

import Vue from 'vue'
import {Row, Col, Autocomplete, Button} from 'element-ui'
import App from './App.vue'

Vue.use(Row);
Vue.use(Col);
Vue.use(Autocomplete);
Vue.use(Button);


new Vue({
    el: '#app',
    render: h => h(App)
});

