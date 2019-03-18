const config = require ( './config')
const watch = require('node-watch')
const http = require('./tools/http')
const arg = 'pay'
const cfg = config[arg]
const log = (msg) =>{
	console.log(new Date().toLocaleTimeString()+':'+msg)
 }
const run_test = async()=>{
    
        log(`the .${cfg.type} file in ${cfg.dir} changed,run the test`)
        log(`the host is ${cfg.host}`)
        
        cfg.cases.forEach(async (testCase)=>{
       		 
            let url = cfg.host + '/'+testCase.uri
            let method =testCase.method || 'get'
			let postdata = testCase.data || {}	
            console.log({url,method})
			try{
				let data = await http[method](url,postdata)
				console.log(data)
			}catch(e){
				console.log(e)
			}

        })


}



watch(cfg.dir , {recursive: true,filer : /\.${cfg.type}$/},run_test)
run_test()

