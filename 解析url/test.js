function test(){
    var url=window.location.search.substring(1);//去掉?
    var args={};//创建对象保存键值对
    var items = url.length?url.split("&"):[];//以&分隔url
    var item = null,name=null,value=null;
    for(var i = 0;i<items.length;i++){
        item = items[i].split("=");//以=分隔items数组中的键值对
        name = item[0];//取得属性名
        value = item[1];//取得属性值
        if(name.length){
            args[name] = value;//保存到对象中
        }
        // alert(name);
        // alert(value);
    }
    alert(args.id);
}