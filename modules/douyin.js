

module.exports = {
    run: function (){
        launchApp("抖音");
        sleep(1000);
        click("首页");
        for(var i=1;i<=10000;i++){
            if(i%5==0){
                swipe(550, 880, 450, 1800, 500);
            sleep(10000);
            toast("这是第"+(i)+"次滑动，已运行"+(i*10)+"秒");
                }
                
                else{
            swipe(550, 1080, 450, 180, 500);
            sleep(10000);
            toast("这是第"+(i)+"次滑动，已运行"+(i*10)+"秒");
            }
        } 
    }
}