import request from '@/utils/real_request'

export function getList(params) {
  return request({
    url: '/lucky/lucky-number',
    method: 'post',
    params
  })
}
