import request from '@/utils/request'

const api_name = '/admin/order/info'

export default {

  getPageList(pageNo, pageSize, searchObj) {
    return request({
      url: `${api_name}/${pageNo}/${pageSize}`,
      method: 'get',
      params: searchObj
    })
  }
}