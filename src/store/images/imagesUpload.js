/**
 * Created by hanguangtian on 2018/1/17.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import image from '../../lib/request/image';

Vue.use(Vuex);

const state = {
    StyleList: [],
    Total: 0,
    imageList: []

};

const mutations = {
    /**
     * 设置图组列表数据
     * @param state
     * @param data
     */
    setStyleList(state, data) {
        state.StyleList = data;
    },
    /**
     * 设置图片列表条数
     * @param state
     * @param total
     */
    setTotal(state, total) {
        state.Total = total;
    },
    /**
     * 设置图组列表
     * @param state
     * @param images
     */
    setImageList(state, images) {
        state.imageList = images;
    },
    /**
     * 添加图片
     * @param state
     * @param ImageID
     */
    addImage(state, image) {
        image.ImageID && state.imageList.push(image);
    },
    /**
     * 删除图片
     * @param state
     * @param ImageID
     */
    deleteImage(state, ImageID) {
        let len = state.imageList.length;
        for (let i = 0; i < len; i++) {
            if (state.imageList[i].ImageID === ImageID) {
                state.imageList.splice(i, 1);
                break;
            }
        }
    }
};
const actions = {
    /**
     * 查询图组列表
     * @param commit
     * @param param
     * @returns {Promise.<T>|*}
     */
    querystylelist({ commit }, param) {
        return axios.post(image.querystylelist, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    let rspJson = data.RspJson;
                    commit('setStyleList', rspJson.StyleList);
                    commit('setTotal', rspJson.Total);
                    return rspJson || {};
                } else {
                    throw data;
                }
            })
            .catch(error => {
                throw error;
            });
    },
    /**
     * 删除图组列表数据
     * @param param
     */
    deletestyle({}, param) {
        axios.post(image.deletestyle, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    return data.RspJson;
                } else {
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                throw error;
            });
    },
    /**
     * 创建图组
     * @param param
     */
    createstyle({}, param) {
        axios.post(image.createstyle, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    return data.RspJson;
                } else {
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                throw error;
            });
    },
    /**
     * 编辑图组
     * @param param
     */
    updatestyle({}, param) {
        axios.post(image.updatestyle, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    return data.RspJson;
                } else {
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                throw error;
            });
    },
    /**
     * 查询图组图片资源
     * @param commit
     * @param param
     */
    queryresourcelist({ commit }, param) {
        axios.post(image.queryresourcelist, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    let rspJson = data.RspJson || {};
                    commit('setImageList', rspJson.UrlList || []);
                    return rspJson;
                } else {
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                throw error;
            });
    },
    /**
     * 上传并设置图片
     * @param param
     */
    uploadimage({ commit }, param) {
        axios.post(image.uploadimage, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    console.log('uploadimage:', data.RspJson);
                    commit('addImage', data.RspJson);
                    return data.RspJson;
                } else {
                    console.log('uploadimage2:', data.RspJson);
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                console.log('uploadimage3:', error);
                throw error;
            });
    },
    /**
     * 删除图片资源
     * @param param
     */
    deleteresource({}, param) {
        axios.post(image.deleteresource, param)
            .then(response => {
                let data = response && response.data || {};
                if (data.RspHeader && data.RspHeader.ErrNo == 200) {
                    return data.RspJson;
                } else {
                    throw data.RspHeader.ErrMsg;
                }
            })
            .catch(error => {
                throw error;
            });
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});