function creatTable (start,end)
let result=""{
    const seperate=index===end ?"":"\n"
    result=result+getLine(index,end)+seperate;
    return result
}
    function getLine(start,end){
     let result=""
     for(let index=start;index<=end;index++){
         result=result+getExpression(start,index)
         return result
     }

     function getExpression(firstFactor,secondFactor){
         const seperate=firstFactor===secondFactor ?"":"\"
         return 