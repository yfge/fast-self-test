module.exports = {
    type: 'lua',
    dir: '/data/geyf/workspace/KMS-user/',
    host: 'localhost:8091',
    cases: [
        {
            uri: '/v1/auth/require-checkcode',
            method: 'post',
        },
        {
            uri: '/v1/auth/login-checkcode',
            method: 'post',
        },
        {
            uri: '/v1/auth/info-by-token',
            method: 'post',
        },
        {
            uri: '/v1/auth/logout',
            mehtod: 'post',
        }
    ]
}

