<template>
    <div>
        <el-autocomplete
                class="inline-input"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="Please Input"
                @select="handleSelect"
        ></el-autocomplete>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                links: [],
                state: '',

            }
        },

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
            }
        },
        mounted() {
            this.links = this.loadAll();
        }
    }
</script>

<style>
</style>

