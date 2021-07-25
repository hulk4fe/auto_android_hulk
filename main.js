var settings = require('./settings');

try{
    console.log('bootstrap', settings.command)
    settings.bootstrap[settings.command](settings.options)
}catch(e){
    console.log('run error', e)
}
