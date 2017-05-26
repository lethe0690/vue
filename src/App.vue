<template>
    <div>
        <topbar></topbar>
        <content-body></content-body>
    </div>
</template>

<script>

    import Topbar from './components/Topbar.vue';
    import ContentBody from './components/ContentBody.vue';


    export default {
        data () {
            return {
                msg: 'Use Vue 2.0 Today!'
            }
        },

        methods: {},


        components: {
            'topbar': Topbar,
            'content-body': ContentBody
        }
    }
</script>

<style>
</style>