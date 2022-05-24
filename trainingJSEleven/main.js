function grabDoll(dolls){
  var bag=[];
  for (x of dolls) {
    if (x === 'Hello Kitty' || x === 'Barbie doll') {
      bag.push(x)
    } else continue
    if (bag.length >= 3) break
  }
  return bag
}