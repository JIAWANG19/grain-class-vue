import request from '@/utils/request'

const api_name = '/admin/vod/chapter'

export default {

    getNestedTreeList(courseId) {
        return request({
            url: `${api_name}/treeList/${courseId}`,
            method: 'get'
        })
    },

    removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },

    save(chapter) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: chapter
        })
    },

    getById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get'
        })
    },

    updateById(chapter) {
        return request({
            url: `${api_name}`,
            method: 'put',
            data: chapter
        })
    }
}