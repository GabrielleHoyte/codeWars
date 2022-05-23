function animal(obj){

  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
var one={name:"dog",legs:4,color:"white"}
var two={name:"cock",legs:2,color:"red"}
var three={name:"rabbit",legs:4,color:"gray"}

animal(one)
animal(two)
animal(three)