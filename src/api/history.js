import request from '@/utils/real_request'

export function getList(params) {
  return request({
    url: '/lucky/history-number',
    method: 'post',
    params
  })
}
