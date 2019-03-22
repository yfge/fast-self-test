const request = require('request')
let execReq = async(opt)=>{
    return new Promise((resolve,reject)=>{
        request(opt,(err,res,body)=>{
            if (err){
                reject(err)
            }else{
                resolve(body)
            }
    })
})
}
let getReq = async(url) =>{
    return await execReq({
        url:url,
        method:'GET',
        json:true,
        headers:{
            'content-type':'application/json'
            }
            })
}
let postReq = async (url,data)=>{
    return await execReq({
        url:url,
        method:'POST',
        json:true,
        body:data,
        headers:{
            'content-type':'application/json'
            }
        })
}
module.exports = {
    exec:execReq,
    get:getReq,
    post:postReq
}
