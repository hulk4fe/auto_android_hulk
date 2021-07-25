

module.exports = {
    run: function() {
        toast("领红包开始>>>")
        for(var i=0;i<wantGet;i++){
            toast("等待第"+(i+1)+"个红包>>>")
            while(!id("al7").exists());
            toast("存在红包>>>")
            var all;
            var num;
            do{
                var hasGetNum = 0;
                if( text("已领取").exists()){
                    hasGetNum += text("已领取").find().length;
                } 
                if( text("已被领完").exists()){
                    hasGetNum += text("已被领完").find().length;
                }
                all = id("al7").find();
                num = all.length;
                console.log("总数："+num+",已领取数："+hasGetNum)
            }while(hasGetNum==num)
            //取最后一个红包
            if(all[num-1].childCount()==2){
                all[num-1].click();
                id("den").findOne(1000).click();
                sleep(1000);
                back();
            }
        }
    }
}
