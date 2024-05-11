function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
   if (score === 100){
    grade = "A++"
   } else if(score < (90 - 99)) {
    grade = "A+"
   }else if(score < (80 - 89)) {
    grade = "B"
   }else if(score < (70 - 79)) {
    grade = "C"
   }else if(score < (60 - 69)) {
    grade = "D"
   }else {
    grade = "F"
    {
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));