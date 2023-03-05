import request from '@/utils/request'

const bast_api = '/admin/user'

export function login(data) {
  return request({
    url: '/admin/user/power/login',
    method: 'post',
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/user/power/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
