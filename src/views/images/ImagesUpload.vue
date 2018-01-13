<template>
    <div class="image-upload">
        <card>
            <flex-box slot="header" justify="space-between">
                <div>图组管理</div>
                <div>
                    <el-button type="primary" v-on:click="onNewImages">+图组</el-button>
                </div>
            </flex-box>
            <el-table class="list-table" :data="StyleList" border v-loading="loading"
                      element-loading-text="拼命加载中">
                <el-table-column type="index" label="序号" width="45" align="center"></el-table-column>
                <el-table-column prop="StyleID" label="图组ID" align="center"></el-table-column>
                <el-table-column prop="StyleName" label="图组名称" align="center"></el-table-column>
                <el-table-column prop="StyleType" :formatter="fmtImgageType" label="图组分类" align="center"></el-table-column>
                <el-table-column prop="CreateTime" :formatter="fmtCreateTime" label="创建时间" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
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
                    :total="Total"
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
    import axios from 'axios';
    import date from '../../lib/common/date';

    export default {
        components: {
            card,
            flexBox
        },
        data() {
            return {
                StyleList: [],
                curPage: 0,
                pageSize: 30,
                Total: 0,
                loading: false
            };
        },
        computed: {},
        watch: {},
        mounted() {
            this.fetch();
        },
        filter: {},
        methods: {
            fetch: function() {
                this.loading = true;
                axios.post(
                    'http://sgm.grassua.site/v2.0/image/querystylelist',
                    {
                        QueryBegin: 0,
                        QueryNum: 10
                    }
                )
                    .then(response => {
                        this.loading = false;
                        let data = response && response.data || {};
                        if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                            let rspJson = data.RspJson;
                            this.Total = rspJson.Total;
                            this.StyleList = rspJson.StyleList;
                        }
                    })
                    .catch(error => {
                        console.log('axios:', error);
                    });
            },
            onNewImages: function() {

            },
            onEdit: function(row) {

            },
            onDelete: function(row) {

            },
            onChangePage: function() {

            },
            /**
             * 格式化图组分类
             * @param row
             * @returns {string}
             */
            fmtImgageType: function(row) {
                let type = 'banner';
                switch (row.StyleType) {
                    case 2:
                        type = '最新';
                        break;
                    case 3:
                        type = '推荐';
                        break;
                }
                return type;
            },
            /**
             * 格式化创建日期
             * @param row
             */
            fmtCreateTime: function(row) {
                return date.toFormat(row.CreateTime * 1000, 'yyyy-MM-dd hh:mm:ss')
            }
        }
    };
</script>
