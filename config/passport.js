module.exports = {
    type: 'lua',
    dir: '/data/geyf/workspace/KMS-user/',
    host: 'http://10.10.151.190:8091',
    cases: [
            
         {
            name : '请求登录验证码',
            index: 1,
            key : 'req',
            uri: '/v1/auth/require-checkcode',
            method: 'post',
            data: {
                mobile : '13521510781',
                source: 'iOSOCR'
            },
        },
        {
            name : '验证码登录',
            index: 2 ,
            key : 'check',
            uri: '/v1/auth/login-checkcode',
            method: 'post',
            data: {
                mobile : '13521510781',
                code: '#req.res.data',
                source: 'iOSOCR'
            }
         },
        {
            name : '验证token',
            index: 3,
            key: 'info',
            uri: '/v1/auth/info-by-token',
            method: 'post',
              data: {
                source: 'iOSOCR',
                token : '#check.res.data.token',
            }
  },
        {
            uri: '/v1/auth/logout',
            name : '登出',
            method: 'post',
           data: {
                token : '#check.res.data.token',
            }
     }
    ]
}

