<template>
    <section class="app-main">
        <div class="app-content">
            <crumbs/>
            <router-view class="view animated"></router-view>
        </div>
    </section>
</template>

<style lang="less" scoped>
    @import "../assets/css/var";

    .app-main {
        padding-top: @navbarHeight;
        margin-left: @sidebarWidth;
    }

    .app-content {
        padding: 16px;
    }
</style>

<script>
    import crumbs from './comp/Breadcrumb.vue';
    //    import { mapGetters } from 'vuex';

    export default {
        computed: {
            //            ...mapGetters({
            //                layout: 'layout'
            //            }),
            //            hiddenSidebarStyle() {
            //                return !this.layout.showSidebar ? { 'margin-left': 0 } : null;
            //            }
        },
        data() {
            return {
                //                showLevelbar: true
            };
        },
        methods: {},
        components: {
            crumbs
        }
    };
</script>
