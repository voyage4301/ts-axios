import axios from '../../src/index'

axios({
    method: 'get',
    url: '/simple/get',
    param: {
        a: 1,
        b: 1
    }
})

axios({
    method: 'get',
    url: '/simple/get?abc=123',
    param: {
        a: 1,
        b: 1
    }
})