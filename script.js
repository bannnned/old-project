//calc age

let daysH = document.getElementById('date')
let monthH = document.getElementById('month')
let yearH = document.getElementById('year')

let showAge = document.getElementById('show-age')
let showAge2 = document.getElementById('show-age-2')

const btn = document.getElementById('calc-btn')


//Getting today's date
let today = new Date()

let d = today.getDate()
let m = today.getMonth() + 1
let y = today.getFullYear()

//max days in months and months number
var maxDays = 0
let monthNum = 0

btn.addEventListener('click', (days, month, year) => {

    days = daysH.value
    month = monthH.value
    year = yearH.value

    function inCorrect() {
        // if value < 0
        if (daysH.value == "" || monthH.value == "" || yearH.value == "") {
            showAge.innerText = 'Please enter your full Date of Birth'
        }
        // if value is negative
        if (parseInt(days) <= 0 || parseInt(month) <= 0 || parseInt(year) <= 0) {
            showAge.innerText = 'Please enter your correct Date of Birth'
        }
        
        if (parseInt(days) > maxDays || parseInt(month) > 12) {
            showAge.innerText = 'Please enter your correct Date of Birth'
        }

        if (parseInt(year) > y) {
            showAge.innerText = 'Sorry, you are not born yet'
        }
        if (parseInt(year) < y) {
            showAge2.innerText = 'This person is quite old, huh?'
        }

    }

    switch (m == m) {
        case m == 1:
            maxDays = 31;
            monthNum = 1;
            break;
        case m == 2:
            maxDays = 28;
            monthNum = 2;
            break;
        case m == 3:
            maxDays = 31;
            monthNum = 3;
            break;
        case m == 4:
            maxDays = 30;
            monthNum = 4;
            break;
        case m == 5:
            maxDays = 31;
            monthNum = 5;
            break;
        case m == 6:
            maxDays = 30;
            monthNum = 6;
            break;
        case m == 7:
            maxDays = 31;
            monthNum = 7;
            break;
        case m == 8:
            maxDays = 31;
            monthNum = 8;
            break;
        case m == 9:
            maxDays = 30;
            monthNum = 9;
            break;
        case m == 10:
            maxDays = 31;
            monthNum = 10;
            break;
        case m == 11:
            maxDays = 30;
            monthNum = 11;
            break;
        case m == 12:
            maxDays = 31;
            monthNum = 12;
            break;
    }
    // leap years

    // Easy and short way
    if ((year % 4 == 0) && (m == 2)) {
        maxDays = 29
    }

    // Hard and long way
    /*    let lastYear = 2024
       const leapYears = [1900]

       function leapArray() {
           let lastElement = leapYears[leapYears.length - 1]
           if (lastElement != lastYear) {
               lastElement += 4
               leapYears.push(lastElement)
               leapArray()
           }
       }
       leapArray()

       // finding leap years
       function contains(arr, elem) {
           if ((arr.find((i) => i === elem) != -1) && (month == 2)) {
               maxDays = 29
           };
       }

       contains(leapYears, y) */

    let ageInYears = y - year;

    if (m <= month) {
        ageInMonths = month - m
        console.log(ageInMonths)
        if (d < days) {
            ageInYears = ageInYears - 1
        }
    } else {
        ageInMonths = m - month
    }

    let ageInDays = d - parseInt(days)

    if (parseInt(days) < d) {
        ageInDays = d - parseInt(days)
    } else if (parseInt(days) > d) {
        ageInMonths -= 1
        ageInDays = maxDays + ageInDays - 1
    }

    showAge.innerText = `You are ${ageInYears} years and ${ageInMonths} months and ${ageInDays} days old`

    inCorrect()


})