// todo  Дан список с разными типами данных, Например :
//  [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк», null, ‘uioo’].
//  Вам надо одинаковые типы данных объединить в отдельный массив. То есть в конечном результате у вас будет несколько
//  массивов c одинаковыми типами данных внутри.  После отсортируйте массивы от большего к меньшему,
//  то есть на первом месте будет массив с наибольшим количеством данных внутри.

var array = [null, 500,'null','undefined', undefined,null, "qwerty", 165, undefined, null, "good", null, '78',78,true]
var str = []
var num = []
 var obj = []
var und = []
var bool = []

for(i of array){
    if(typeof i === 'object'){
        obj.push(i)
    }else if(typeof i === 'number'){
        num.push(i)
    }else if(typeof i === 'string'){
        str.push(i)
    }else if(typeof i === 'undefined'){
        und.push(i)
    }else if(typeof i === 'boolean') {
        bool.push(i)
    } else {
        console.log('error')
    }
}
console.log(obj)
console.log(num)
console.log(str)
console.log(und)
console.log(bool)

var result = []
result.push(obj,num,str,und,bool)
result.sort((a, b) => b.length - a.length)
console.log(result)
