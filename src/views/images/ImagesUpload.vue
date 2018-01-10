<template>
    <div class="image-upload">
        <card>
            <flex-box slot="header" justify="space-between">
                <div>图组管理</div>
                <div>
                    <el-button type="primary" v-on:click="onNewImages">+图组</el-button>
                </div>
            </flex-box>
            <el-table class="list-table" :data="imageList" border v-loading="loading"
                      element-loading-text="拼命加载中">
                <el-table-column type="index" label="序号" width="45" align="center"></el-table-column>
                <el-table-column prop="agentName" label="图组名称" align="center"></el-table-column>
                <el-table-column prop="agentID" label="图组描述" align="center"></el-table-column>
                <el-table-column prop="date" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="onEdit(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="onDelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="pagination"
                    background
                    layout="total, prev, pager, next, jumper"
                    :current-page="curPage"
                    :page-size="pageSize"
                    :total="total"
                    @current-change="onChangePage"
            >
            </el-pagination>
        </card>
    </div>
</template>
<style lang="less">

</style>
<script>
    import card from '../../components/common/Card.vue';
    import flexBox from '../../components/common/FlexBox.vue';

    export default {
        components: {
            card,
            flexBox
        },
        data() {
            return {
                imageList: [],
                curPage: 0,
                pageSize: 30,
                total: 0
                
            };
        },
        computed: {},
        watch: {},
        mounted() {
        },
        filter: {},
        methods: {
            onNewImages: function() {

            },
            onEdit: function(row) {
                
            },
            onDelete: function(row) {
                
            },
            onChangePage: function() {
                
            }
        }
    };
</script>
