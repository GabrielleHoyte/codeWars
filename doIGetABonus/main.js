function bonusTime(salary, bonus) {
  if (bonus === true){
    let bonused = salary * 10
    return '£' + bonused
  } else {
    return '£' + salary
  }
}