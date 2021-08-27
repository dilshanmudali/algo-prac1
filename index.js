
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


function largest(arr){

}
console.log(largest([]))

