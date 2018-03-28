var array=Array(4); // js 并不要求对数组长度进行限定，你写不写无所谓，但你写了的话，没写满，js还是会给你分
array[0]='1';//佩相应的空间
array[1]='2';
array[2]='3';
array[3]='4';
array[4]='5';

var shuzhu=Array['hello,world','hi']; //这么写是错的
var shuzhu=Array('hello,world','hi');
var shuzhu=["hello,world","hi",'yi'];
var shuzhu=Array('hi',1);  // 数组里面的类型不要求相同,里面甚至可以写变量和数组
shuzhu[1]=2;  // 
shuzhu[0]=1;  // 数组里面无所谓，字符串可以重新定义成数字；
var newshuzhu=[3,4];
shuzhu[2]=newshuzhu;



