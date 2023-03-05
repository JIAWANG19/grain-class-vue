import request from '@/utils/request'

const api_name = '/admin/activity/couponInfo'

export default {

    getPageList(pageNo, pageSize) {
        return request({
            url: `${api_name}/${pageNo}/${pageSize}`,
            method: 'get'
        })
    },
    getById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get'
        })
    },

    save(role) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: role
        })
    },

    updateById(role) {
        return request({
            url: `${api_name}`,
            method: 'put',
            data: role
        })
    },
    removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },
    removeRows(ids) {
        return request({
            url: `${api_name}`,
            method: 'delete',
            data: ids
        })
    },

    getPageCouponUseList(page, limit, searchObj) {
        return request({
            url: `/admin/activity/couponUse/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    }
}