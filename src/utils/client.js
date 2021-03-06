/**
 * 异步操作
 */
import Axios from 'axios'
const qs = require('qs') // 引入node的qs模块

Axios.defaults.transformRequest = [(data) => qs.stringify(data)]

export const post = (url, data) => {
    url = baseUrl + url;
    return Axios.post(url, data).then(
        (res) => {
            if (res.data.code == 666) {
                return Promise.resolve(res.data)
            } else {
                return Promise.reject()
            }
        },
        (err) => {
            return Promise.reject()
        }
    )
}