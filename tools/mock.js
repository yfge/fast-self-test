var fs = require('fs')
let randomMobile = ()=> {
    let num = '1'
    random = Math.random()
    if (random >= 0.1 && random < 0.2) {//15概率
        num += '5'
    } else if (random >= 0.05 && random < 0.1) {//18概率
        num += '8'
    } else if (random >= 0 && random < 0.05) {//17概率
        num += '7'
    } else {//13概率
        num += '3'
    }
    let numLen9 = ''
    for (let j = 0; j < 9; j++) {
        numLen9 += Math.floor(Math.random() * 10)
    }
    return num + numLen9
 }
 module.exports = {
    randomMobile
 }
