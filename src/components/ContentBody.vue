<template>
    <div>
        <el-autocomplete
                class="inline-input"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="Please Input"
                @select="handleSelect"
        ></el-autocomplete>
        <el-button slot="append" icon="search" v-on:click="findFlag"></el-button>

        <img :src="flagSrc">
    </div>
</template>

<script>

    const fx = require('money');

    const request = require('request-promise');

    request('http://api.fixer.io/latest?base=USD')
            .then(function (data) {
                let temp = JSON.parse(data).rates;
                temp['USD'] = 1;
                fx.rates = temp;
            })
            .catch(function (err) {
                console.log(err);
            });


    export default {
        data () {
            return {
                links: [],
                state: '',
                flagSrc: '',

            }
        },
//        computed:{
//            flagSrc:function(){
//                return
//            }
//        },
        methods: {
            querySearch(queryString, cb){
                let links = this.links;
                let results = queryString ? links.filter(this.createFilter(queryString)) : links;

                cb(results);
            },
            createFilter(queryString) {
                return function (link) {
                    return (link.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    {"value": "rmb"},
                    {"value": "cad"},
                    {"value": "usd"},
                    {"value": "gbp"},
                    {"value": "aed"},
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            findFlag(){
                switch (this.state) {
                    case '':
                    {
                        this.flagSrc = '';
                        break;
                    }
                    case 'cad':
                    {
                        this.flagSrc = 'http://flags.fmcdn.net/data/flags/h80/ca.png';
                        break;
                    }
                    case 'rmb':
                    {
                        this.flagSrc = 'http://flags.fmcdn.net/data/flags/h80/cn.png';
                        break;
                    }
                    default:
                    {
                        this.flagSrc = '';
                        break;
                    }
                }

                console.log(fx.convert(100, {from: "USD", to: "CNY"}));

                this.state = '';
            }
        },
        mounted() {
            this.links = this.loadAll();
        }
    }
</script>

<style>
</style>

