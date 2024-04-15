function lifeInWeek(age){
    var year = 90-age;
    var month = year*12;
    var week = year*52;
    var days = year*365;
    alert("You have left "+year+" years, "+month+" months, "+week+" weeks and"+days+" days.")
}
lifeInWeek(prompt("INPUT YOUR AGE"));