//反转单词
/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
    示例 1:
    输入: "Let's take LeetCode contest"
    输出: "s'teL ekat edoCteeL tsetnoc" 
    注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */
// export default (str)=>{
//     return str.split(' ').map (item=>{
//         return item.split('').reverse().join('');
//     }).join(' ')
// }

// export default (str)=>{
//     return str.split(/\s/g).map (item=>{
//         return item.split('').reverse().join('');
//     }).join(' ')
// }

// + 匹配前面的子表达式一次或多次。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于{1,}。
//

export default (str)=>{
    return str.match(/[\w']+/g).map (item=>{
        return item.split('').reverse().join('');
    }).join(' ')
}