
var secret = require('../secret')

var keyboard = [[557, 1666], 
[272, 1115], 
[550, 1134], 
[873, 1132], 
[272, 1320], 
[550, 1320],
[873, 1320], 
[246, 1511], 
[550, 1511], 
[873, 1511]];

module.exports = {
    run: function(options) {
        if (! device.isScreenOn()) {
            device.wakeUp();
            sleep(200);
            for (let i=0; i < 5; i ++) {
                swipe(
                    200, 2000, 200, 800, 210
                    );
            };
            sleep(300);
            secret.login.forEach(el => {
                click(keyboard[el][0], keyboard[el][1]);sleep(500);
            })
            sleep(500);
        };
    }
}