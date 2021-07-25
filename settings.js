var coord = require('./modules/coord');
var unlock = require('./modules/unlock');
var hongbao = require('./modules/hongbao')
var jd = require('./modules/jd')
var douyin = require('./modules/douyin')
var darongcheng = require('./modules/darongcheng')

var bootstrap = {
    'coord': coord.run,
    'unlock': unlock.run,
    'hongbao': hongbao.run,
    'jd': jd.run,
    'douyin': douyin.run,
    'darongcheng': darongcheng.run
}

module.exports = {
    'bootstrap': bootstrap,
    'command': 'unlock',
    'options': {

    }
}