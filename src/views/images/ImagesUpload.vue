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
                <el-table-column label="图组名称" align="center">
                    <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="onShowImageList(scope.row)">{{scope.row.StyleName}}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="StyleType" :formatter="fmtImgageType" label="图组分类"
                                 align="center"></el-table-column>
                <el-table-column prop="CreateTime" :formatter="fmtCreateTime" label="创建时间"
                                 align="center"></el-table-column>
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

        <el-dialog :title="imageFormTitle" :visible.sync="imageFormStatus" center width="450px">
            <el-form ref="imageForm" :model="imageForm" label-width="130px" :inline="true">
                <el-form-item label="图组名称" prop="account">
                    <el-input v-model="imageForm.StyleName" placeholder="请输入图组名称" clearable></el-input>
                </el-form-item>

                <el-form-item label="图组分类">
                    <el-select v-model="imageForm.StyleType" placeholder="请选择">
                        <el-option
                                v-for="item in imageStyleType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <!--<el-form-item label="上传图组">-->
                <!--<image-upload-->
                <!--:action="uploadUrl"-->
                <!--:imageurl.sync="imageForm.licensePic"-->
                <!--&gt;</image-upload>-->
                <!--</el-form-item>-->
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="onCancel">取消</el-button>
                <el-button @click="onConfirm" type="primary">确认</el-button>
            </span>
        </el-dialog>
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
                curPage: 1,
                pageSize: 3,
                Total: 0,
                loading: false,
                imageFormTitle: '新建图组',
                imageFormStatus: false,
                imageForm: {},
                imageFormType: 'create',
                imageStyleType: [
                    {
                        value: 1,
                        label: 'banner'
                    },
                    {
                        value: 2,
                        label: '最新'
                    },
                    {
                        value: 3,
                        label: '推荐'
                    }
                ]
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
                        QueryBegin: (this.curPage - 1) * this.pageSize,
                        QueryNum: this.pageSize
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
            /**
             * 新建相册弹窗
             */
            onNewImages: function() {
                this.imageFormType = 'create';
                this.imageFormTitle = '新建图组';
                this.imageFormStatus = true;
                this.imageForm = {};
            },
            /**
             * 编辑相册弹窗
             */
            onEdit: function(row) {
                let data = { ...row };
                this.imageFormType = 'edit';
                this.imageFormTitle = '编辑图组';
                this.imageFormStatus = true;
                this.imageForm = data;
            },
            /**
             * 删除相册
             */
            onDelete: function(row) {
                let url = 'http://sgm.grassua.site/v2.0/image/deletestyle';
                let param = {
                    StyleID: row.StyleID
                };

                this.$confirm('此操作将永久删除该相册, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    axios.post(url, param)
                        .then(response => {
                            let data = response && response.data || {};
                            if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                                this.$message({
                                    message: '创建相册成功',
                                    type: 'success'
                                });
                                this.fetch();
                            } else {
                                this.$message.error(data.RspHeader.ErrMsg);
                            }
                        })
                        .catch(error => {
                            this.$message.error(error);
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
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
            },
            close: function() {
                this.imageFormStatus = false;
                this.fetch();
            },
            /**
             * 新建/编辑 相册确认
             */
            onConfirm: function() {
                let url = 'http://sgm.grassua.site/v2.0/image/createstyle';
                if (this.imageFormType === 'edit') {
                    url = '';
                }

                axios.post(url, this.imageForm)
                    .then(response => {
                        let data = response && response.data || {};
                        if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                            this.$message({
                                message: '创建相册成功',
                                type: 'success'
                            });
                            this.close();
                        } else {
                            this.$message.error(data.RspHeader.ErrMsg);
                        }
                    })
                    .catch(error => {
                        this.$message.error(error);
                    });
            },
            onCancel: function() {
                this.imageFormStatus = false;
            },
            /**
             * 展示图片列表
             * @param row
             */
            onShowImageList: function(row) {
                console.log('onShowImageListL', row);
            }
        }
    };
</script>
