import request from '@/utils/request'

const api_name = '/admin/vod/video'

export default {

    save(video) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: video
        })
    },

    getById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get'
        })
    },

    updateById(video) {
        return request({
            url: `${api_name}`,
            method: 'put',
            data: video
        })
    },

    removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    }
}