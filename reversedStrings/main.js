function solution(str){
  let split = str.split('')
  let reverse = split.reverse()
  let join = reverse.join('')
  return join
}