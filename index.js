
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


// chunk

// function chunk(arr,size){
//   if(size <= 0) return `no`
//   let chunkArr = []
//   while(arr.length > 0){
//     chunkArr.push(arr.slice(0,size))
//     console.log(chunkArr)
//     arr = arr.slice(size)  
//   }
//   return chunkArr
// }
// console.log(chunk(['a','b','c','d'], 1))

// function chunk(arr,size){
//   if(size <= 0) return `no`
//   let chunkArr = []
//   for(i=0;i<arr.length;i+=size){
//     // console.log(chunkArr)
//     chunkArr.push(arr.slice(i,i+size))
//     // console.log(chunkArr)
  
//     // console.log(chunkArr)
//   }
//   return chunkArr
// }
// console.log(chunk(['a','b','c','d'], 3))

// Slasher


// function slash(arr,num){
//   arr.splice(0,num)
//   return arr;
// }
// console.log(slash([1,2,3],2))
// console.log(slash([1,2,3],1))
// console.log(slash(['dog','cat','bat'],1))

// mutations

// function mutate(arr){
//  let arr1 = arr[0].toUpperCase()
//  let arr2 = arr[1].toUpperCase()
//  console.log(arr1,arr2)
//    if(arr1.indexOf(arr2) === -1){
//     return false
//   }
//   return true
// }
// console.log(mutate(["hello","hey"]))//false
// console.log(mutate(["hello","he   o"]))

// function bouncer(arr) {
//   return arr.filter(elem => {
//     return elem
//   })
// }

// console.log(bouncer([7,'ate',false, 9]))


//seek and destroy

// function destroy(arr) {
//   let args = Array.from(arguments)
//   let target = args.slice(1)
//   console.log(target)

//   return arr.filter(e => {
//     return !target.includes(e)
//   })
// }

// console.log(destroy([1,2,3,1,2,3],2,3)); //[1,1]

// function getIndex(arr,num){

//   arr.sort(function(a,b) {
//     return a - b 
//   });

//   for(let i=0; i<arr.length; i++){
//     if(num <= arr[i]){
//       return i;
//     }
//   }
//   return arr.length
// }

// console.log(getIndex([3,40,10],15))

// Caesars cipher


// function chipher(str){
//   let ciphered = ''

//   for(let i=0;i<str.length;i++){
//     let asciiNum = str[i].charCodeAt();
//     if(asciiNum >= 65 && asciiNum <= 77){
//       ciphered += String.fromCharCode(asciiNum + 13)
//     }else if(asciiNum >= 78 && asciiNum <= 90){
//     ciphered += String.fromCharCode(asciiNum - 13)
//     }else{
//       ciphered += str[i]
//     }
//   }
//   return ciphered;
// }
// console.log(chipher("SERR PBQR PNZC"))

// sum of all nums in range

// function sumAll(arr){
//   let start = Math.min(arr[0], arr[1])
//   let end = Math.max(arr[0], arr[1])
//   let total = 0;

//   for(let i=start; i<=end; i++){
//     total += i
//   }
//   return total
// }

// sumAll([4,1])


// function diffArr(arr1,arr2) {
//   let newArr =[]
// //   for(i=0;i<=arr1.length;i++){
// //     if(arr2.indexOf(arr1[i]) === -1){
// //       newArr.push(arr1[i])
// //     }
// //   }
// //   for(j=0;j<arr2.length;j++){
// //     if(arr1.indexOf(arr2[j]) === -1){
// //       newArr.push(arr2[j])
// //     }
// //   }
// //   return newArr;
// // }

// console.log(diffArr([1,2,3,5],[1,2,3,4,5])) //[4]


// function diffArr(arr1,arr2) {
//   let combined = arr1.concat(arr2)
//   return combined.filter(el => {
//     if(arr1.indexOf(el) === -1 || arr2.indexOf(el) === -1){
//       return el;
//     }
//   })
// }

// console.log(diffArr([1,2,3,5],[1,2,3,4,5])) //[4]

// function romanize(str){
//   let romanToNum = {
//     X : 10,
//     IX : 9,
//     V : 5,
//     IV : 4,
//     I : 1
//   };

//   let roman = "";

//   for(var key in romanToNum){
//     // console.log(key, romanToNum[key])
//     while(str >= romanToNum[key]){
//       roman += key
//       str -= romanToNum[key]
//     }
//   }
//   return roman;
// }

// console.log(romanize(7))