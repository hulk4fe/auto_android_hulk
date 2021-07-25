       

module.exports = {
    run: function(options){
        var intent = new Intent();
        intent.setAction('android.settings.APPLICATION_DEVELOPMENT_SETTINGS');
        app.startActivity(intent);
        
        for(var i = 0; i <= 1; i++){
            swipe(
                500, 1000, 500, 500, 20
                );
            sleep(1500);
        }
        
        if (text("指针位置").exists()){
            console.log('find')
            while(!click("指针位置"));
            sleep(1000)
        }   
        if (text("显示点按操作反馈").exists()){
            console.log('find')
            while(!click("显示点按操作反馈"));
            sleep(1000)
        }  
    }
}