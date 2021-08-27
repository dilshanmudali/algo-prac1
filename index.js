
// reverse

// function reverse(str){
//   let rev = ""
//   for(i=str.length-1; i>=0; i--){
//     rev += str[i]
//   }
//   return rev
// }

// console.log(reverse('hello'))


// factorialize

// function factorialize(num){
//   if(num<=0){
//     return 0
//   }
//   let tot = 1
//   for(i=1; i<=num; i++){
//     tot *= i 
//   }
//   return tot
// }

// console.log(factorialize(5))

// // palindrome check


// function palindrome(str){
//   let reg = /[\W_]/g; 
//   let repstr = str.toLowerCase().replace(reg,"")
//   let newStr = repstr.split('').reverse().join('')
//   console.log(newStr)
//   if(newStr === repstr){
//     return true
//   }
//   else{
//     return false
//   }
// }

// console.log(palindrome('racecar'))
// console.log(palindrome('2A3*3a2'))
// console.log(palindrome('2A3 _3A2'))
// console.log(palindrome('oooolaaoooo'))


// find logest word

// function Longest(str){
//   let newStr = str.split(' ')
//   // let longestWord = ''
  
//   // for(word of newStr){
//   //   if(word.length > longestWord.length){
//   //     longestWord = word
//   //   }
//   // }
//   // return longestWord

//   let long = newStr.sort((a,b) => b.length - a.length)
//   return long[0].length
// }

// Longest("the last day of our times will be the last time of our days")


// function x(){

// }
// console.log(x())

//titlecase

// function titleCase(str){
//   let word = str.toLowerCase().split(" ")
//   for(let i = 0; i<=word.length-1; i++){
//     word[i] = word[i][0].toUpperCase()+ word[i].slice(1)
//   }
//   return word.join(' ')
// }
// console.log(titleCase("I'm a little teapot"))

// function titleCase(str){
//   let titled = str.toLowerCase().split(" ").map(elem => {
//     return elem[0].toUpperCase() + elem.slice(1)
//   })
//   return titled.join(" ");
// }
// console.log(titleCase("I'm a little teapot")) //O(n)

//return largest numbers in Array


// function largest(arr){
//   let maxNum = []
//   for(i=0;i<arr.length;i++){
//     maxElem = arr[i][0]
//     for(j=0; j<arr[i].length;j++){
//       let currentElem = arr[i][j]
//       if(currentElem > maxElem){
//         maxElem = currentElem
//       }
//     }
//     maxNum.push(maxElem)
//   }
//   return maxNum O(n^2)
// }
// console.log(largest([[4,5,1,3,,9],[1,5,6,9],[100,200,300,50],[10,30,21,3]]))


// confirm the ending


// function confirmEnd(str,target){
//   if(typeof(str,target) !== 'string')return undefined
//   let strEnd = str.slice(-1)
//   if(strEnd === target) {
//     return true
//   }else{
//     return false
//   }
// }
// console.log(confirmEnd(0, 3))


// repeat string

// function repeat(str,num){
//   if(num<0) return ""
//   let counter = ''
//   for(i=0;i<num;i++){
//     counter += str
//   }
//   return counter
// }
// console.log(repeat('faf',3))

// using recursion

//  function repeat(str,num){
//  if(num < 0) return ""
//  if(num === 1) return str

//  return str + repeat(str, num -1)
// }
// console.log(repeat('faf',3))

// truncate string


// function truncate(str,num){
//   if(num>= str.length) return str;
//   if(num<=3){
//     return str.slice(0,num) + "..."
//   }
//   let newStr = '' 
//   for(let i=0;i<str.length;i++){
//     newStr = str.slice(0,num-3)
//   }

//   return newStr + '...';
// }

// console.log(truncate('asasfwafav', 'hello'.length))