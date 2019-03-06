const mysql = require('mysql')
const mysqlcon = {

    host:'10.10.228.163',
    port:'3308',
    user:'test',
    password:'OnlyKf!@#',
    database:'susuan'
}

let execSql = async (sql) => {
    return new Promise((resolve,reject)=>{
        let con = mysql.createConnection(mysqlcon)
        con.connect()
        con.query(sql,(err,result,fields)=>{
            if (err)
            {
                reject(err)
                
            }else {
                resolve (result)
            }
       })
       

   })
}

module.exports.exec = execSql



