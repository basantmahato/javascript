function check(year){

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {

        console.log("Leap Year")
        
    } else {

        console.log("Not a leap year")
        
    }

}

year = 2025
check(year);