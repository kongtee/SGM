<template>
    <div id="app" class="SGM">
        <!-- 顶部导航 start -->
        <navbar/>
        <!-- 顶部导航 end -->
        <!-- 左侧菜单栏 start -->
        <sidebar/>
        <!-- 左侧菜单栏 end -->
    </div>
</template>
<style lang="less">
    @import './assets/css/common.less';
</style>
<script>
    import navbar from './components/comp/Navbar.vue';
    import sidebar from './components/comp/Sidebar.vue';

    export default {
        components: {
            navbar,
            sidebar
        },
        data() {
            return {
                msg: 'wshdfsfh'
            };
        }
    };
</script>
