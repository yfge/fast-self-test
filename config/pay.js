module.exports = {
    type: 'php',
    dir: '/data/www/geyf/workspace/knowbox_secure_api',
    host: 'http://localhost:9232',
    cases: [
        {
            uri: '/admin/order-bill/get' ,
			method : 'post',
			data: {
				pageChannel:['3.1.0'],
				pageIndex:1,
				pageSize:10
			}
       },
		 {
            uri: '/admin/order-bill/static' ,
			method : 'post',
			data: {
				pageChannel:['3.1.0'],
				pageIndex:1,
				pageSize:10
			}
       }    
    ]
}

