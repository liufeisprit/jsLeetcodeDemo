/*
计数二进制子串 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
重复出现的子串要计算它们出现的次数。
来源：力扣（LeetCode）
*/
/* 
    00110011
        0011
        01
        1100
        10
        0011
        01
*/
// for(int i=0;i<str.length;++i){
//     r=match(str.slice(i))
//     if(r){
//         result.push(r)
//     }
// }
export default (str)=>{
    let result=[]
    for(var i=0;i<str.length;++i){
        let r=searchBinaryString(str.slice(i))
        if(r){
            result.push(r)
        }
    }
    return result
}
function searchBinaryString(str){
    // 00110011
    // 000111
    let s1=1,s2=1;
    for(var i=0;i<str.length;i++){
        if(str[i]==0)
            s1++
        if(str[i]==1)
            s2++
        let cur=str.substring(0,i+1);
        let flag=s1==s2
        if(flag){
            if(cur[0]!=cur[cur.length-1]){
                return cur
            }
        }
    }
}