/**
 * Created by hanguangtian on 2018/1/19.
 */
import host from './host';

const path = host + 'image/';

const image = {
    //查询相册基础信息
    querystylelist: path + 'querystylelist',
    //删除相册
    deletestyle: path + 'deletestyle',
    //新建相册
    createstyle: path + 'createstyle',
    //编辑相册
    updatestyle: path + 'updatestyle',
    //查询相册图片内容请求
    queryresourcelist: path + 'queryresourcelist',
    //上传并设置资源图片
    uploadimage: path + 'uploadimage'
};

export default image;