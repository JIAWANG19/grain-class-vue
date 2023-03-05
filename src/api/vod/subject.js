import request from '@/utils/request'

const api_name = '/admin/vod/subject'

export default {
    // 课程分类列表的接口
    getChildList(parentId) {
        return request({
            url: `${api_name}/byParentId/${parentId}`,
            method: 'get'
        })
    }
}