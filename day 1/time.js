/*the amount of time spend by a block or a function
*/
console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun1 = function(){ 
     console.log('fun1 is running..'); 
 } 
 fun(); // calling fun(); 
 fun1(); // calling fun2(); 
console.timeEnd('abc');