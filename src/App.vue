<template>
    <div id="app" class="SGM">
        <!-- 顶部导航 start -->
        <navbar/>
        <!-- 顶部导航 end -->
        <!-- 左侧菜单栏 start -->
        <sidebar/>
        <!-- 左侧菜单栏 end -->
        <!-- 主体 start -->
        <app-main/>
        <!-- 主体 end -->
    </div>
</template>
<style lang="less">
    @import './assets/css/common.less';
</style>
<script>
    import navbar from './components/comp/Navbar.vue';
    import sidebar from './components/comp/Sidebar.vue';
    import appMain from './components/AppMain.vue';

    export default {
        components: {
            navbar,
            sidebar,
            appMain
        },
        data() {
            return {
                msg: 'wshdfsfh'
            };
        }
    };
</script>
