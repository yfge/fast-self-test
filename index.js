const config = require ( './config')
const watch = require('node-watch')
const _ = require('lodash')
const arg = 'passport'
const http = require('./tools/http')
const cfg = config[arg]
const log = (msg) =>{
	console.log(new Date().toLocaleTimeString()+':'+msg)
 }
const mocktools = require('./tools/mock')


const run_test = async()=>{
        log(`the .${cfg.type} file in ${cfg.dir} changed,run the test`)
        log(`the host is ${cfg.host}`)
        let all = {}
        for(let i = 0 ; i < cfg.cases.length; i ++)
        {
            let testCase = cfg.cases[i]
            let url = cfg.host + '/'+testCase.uri
            let method =testCase.method || 'get'
			let postdata = _.cloneDeep(testCase.data || {})
            all[testCase.key]={}
			try{
                for( let p in postdata){
                    let str = postdata[p]
                    if (str.indexOf('#') == 0 ) {
                        let key = str.substr(1)
                        postdata[p] = _.get(all,key)
                    }else if (str.indexOf('*')==0){
                        let key = str.substr(1)
                        let val = mocktools[key]()
                        postdata[p]=val
                    }

                }
				let data = await http[method](url,postdata)
                all[testCase.key].req = postdata 
                all[testCase.key].res = data 
                console.log({name:testCase.name,url,method,req:postdata,res:data})
			}catch(e){
				console.log(e)
			}
        }
}

watch(cfg.dir , {recursive: true,filter : new RegExp(`\.${cfg.type}$`)},run_test)
run_test()

