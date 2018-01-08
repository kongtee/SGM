<template>
    <header class="header">
    </header>
</template>
<style lang="less" scoped>
    @import "../../assets/css/var";
    .header {
        position: fixed;
        min-width: 100%;
        z-index: @maxZindex;
        box-shadow: 0 1px 1px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        background: #fff;
        height: @navbarHeight;
    }
</style>
<script>
    export default {
        data() {
            return {};
        },
        computed: {},
        watch: {},
        mounted() {
        },
        filter: {},
        methods: {}
    };
</script>
