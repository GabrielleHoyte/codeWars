const divisions = (n, divisor) => {
  let count=0;
  while(n>1){
  count++
  n=n/divisor
  }
  return count-1
}