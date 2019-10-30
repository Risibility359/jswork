function sort(method){
    //读取待排序数据
    let orighin = document.getElementById('origin').value
    let logs
    console.logs(method)
    //根据传染你排序的方法调用不同的排序函数
    if(method=='bubble'){
      //调用排序bubbleSort()冒泡排序函数获取排序结果，
      logs = bubbleSort(origin)
    }else if(method=='insert'){
      //调用inserTSort()插入排序函数获取排序结果，
      logs = insertSort(origin)
    }
    //显示冒泡排序的div
    showDiv = document.getElementById('Anim')
    //生成排序日志数组的遍历器对象
    logValuse = logs.value()
    //尝试看一下logValuse.next()遍历器对象返回的数据结构
    console.log(logValuse.next())
    //延时方式showLog()调用函数显示排序步骤，50毫秒后调用，调用一次显示一条排序状态。
    setTimeout(showLog(logValuse,showDiv),50)
    }