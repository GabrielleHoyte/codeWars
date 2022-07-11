// function friend(friends){
//   return friends.filter(isItFour => isItFour.length === 4)
// }

function friend(friends){
  return friends.filter(function (isItFour){
      return isItFour.length == 4
  })
}