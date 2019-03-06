const config = require ( './config')
const watch = require('node-watch')
const arg = 'pay'
const cfg = config[arg]
const log = (msg) =>{
	console.log(new Date().toLocaleTimeString()+':'+msg)
 }
const run_test = async()=>{
    
        log(`the .${cfg.type} file in ${cfg.dir} changed,run the test`)
        log(`the host is ${cfg.host}`)
        
        for(let testCase in cfg.cases){
        
            let url = cfg.host + '/'+testCase.uri
            let method =testCase.method && 'get'
            console.log({url,method})


        }


}



watch(cfg.dir , {recursive: true,filer : /\.${cfg.type}$/},run_test)
run_test()

