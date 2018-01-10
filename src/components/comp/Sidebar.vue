<template>
    <aside class="sidebar animated">
        <flex-box class="sidebar-head">
            SGM管理平台
        </flex-box>
        <el-menu
                class="el-menu-vertical-demo"
                background-color="#3f3f3f"
                text-color="#cbcbcb"
                active-text-color="#fe4444"
                :default-active="defaultPath"
                :router="true"
                :default-openeds="defaultOpen"
        >
            <div v-for="(item, index) in menuItems" v-bind:key="index">
                <el-submenu :index="item.path || index + ''" v-if="item.children && item.children.length">
                    <template slot="title">
                        <i :class="['fa', item.meta.icon]"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(subItem, subIndex) in item.children" v-if="subItem.name || subItem.path"
                                      v-bind:key="subIndex" :index="subItem.path || index + '' + subIndex">
                            {{subItem.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item :index="item.path || index + ''" v-else>
                    <i :class="['fa', item.meta.icon]"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </aside>
</template>
<style lang="less">
    @import "../../assets/css/var";

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 180px;
        z-index: @maxZindex + 1;
        background: #3f3f3f;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 0 15px;
        .sidebar-head {
            color: #fff;
            font-size: 25px;
            height: @navbarHeight;
            background-color: #fe4444;
        }
        .el-menu {
            border-right: 0;
            i {
                font-size: 16px;
            }
            .el-icon-arrow-down {
                font-size: 12px;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
            }
            .el-menu-item-group__title {
                padding: 0;
            }
        }
        .el-submenu__title,
        .el-menu-item {
            height: 40px;
            line-height: 40px;
            &.is-active {
                background-color: #222 !important;
            }
        }
    }
</style>
<script>
    import FlexBox from '../common/FlexBox.vue';
    export default {
        components: {
            FlexBox
        },
        data() {
            return {
                defaultPath: '',
                defaultOpen: [],
                menuItems: [
                    {
                        name: '图片管理',
                        meta: {
                            icon: 'fa-cloud',
                            expanded: true
                        },
                        children: [
                            {
                                name: '图组上传',
                                path: '/imagesupload',
                                component: function() {
                                    return import('../../views/images/ImagesUpload.vue');
                                },
                                meta: {}
                            }
                        ]
                    }
                ]
            };
        },
        computed: {},
        watch: {},
        mounted() {
            const menuItems = this.menuItems;
            menuItems.forEach((item, index) => {
                if (item.meta.expanded) {
                    this.defaultOpen.push(item.path || index + '');
                }
            });
        },
        filter: {},
        methods: {}
    };
</script>
