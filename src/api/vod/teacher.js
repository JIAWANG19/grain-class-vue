import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

import { getToken } from '@/utils/auth' // get token from cookie

export default {
    /**
     * 讲师的条件查询分页
     * pageNo 当前页
     * pageSize 每页记录数
     * searchObj 查询条件对象
     */
    pageList(pageNo, pageSize, searchObj) {
        return request({
            url: `${api_name}/${pageNo}/${pageSize}`,
            method: 'get',
            params: searchObj
        })
    },
    remoreTeacherById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },
    saveTeacher(teacher) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: teacher
        })
    },
    updateTeacher(teacher) {
        return request({
            url: `${api_name}`,
            method: 'put',
            // headers: {
            //     'token': getToken()
            // },
            data: teacher
        })
    },
    getTeacherById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get',
        })
    },
    batchRemove(ids) {
        return request({
          url: `${api_name}`,
          method: `delete`,
          data: ids
        })
      },
      // 查询所有讲师
      list() {
        return request({
            url: `${api_name}/list`,
            method: `get`,
          })
      },
}

// export function getList(params) {
//     return request({
//         url: '/vue-admin-template/table/list',
//         method: 'get',
//         params
//     })
// }
