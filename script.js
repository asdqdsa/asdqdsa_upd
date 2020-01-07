// JavaScript source code
const regexpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/ // regex выражение дл€ проверки парол€
const regexmail = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,9}/i;  // regex выражение дл€ проверки имени
const regexphone = /^(\+7|7|8)(\([0-9][0-9]{2}\)|[0-9][0-9]{2})([0-9]{7})$/  // regex выражение дл€ проверки телефона

//проверка пустого пол€ и заданных условий с выводом ошибки по клику
function empty() {
    var name = document.getElementById("name").value 
    var password = document.getElementById("password").value
	var phone = document.getElementById("phone").value

    if (name == "") {
        document.getElementById('message1').innerText ="*Please enter your credentials*"
        return false
    }
    if (!regexmail.test(name)) {
        document.getElementById('message1').innerText = "*Invalid email address*"
        return false
    } else {
        if (name !== "")
        document.getElementById('message1').innerHTML = "&nbsp;"
    }
    if (password == "") {  
        document.getElementById("message2").innerText ="*Please enter your password!*"
        return false    
    }
    if (!regexpassword.test(password)) {
        document.getElementById('message2').innerText = "*Incorrect password*"
        return false 
    } 	
	if (phone == "") {
        document.getElementById('message2').innerText ="*Please enter your phone*"
        return false
    }
	if (!regexphone.test(phone)) {
        document.getElementById('message2').innerText = "*Incorrect phone*"
        return false 
    } 	
} 
//часы с датой и д.недели
function displaytime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var y = date.getFullYear()
    var mn = date.getMonth() + 1 // по умолчанию счет мес€ца происходит с 0
    var ch = date.getDate()
    var weekday = new Array(7)
        weekday[0] = "Sunday"
        weekday[1] = "Monday"
        weekday[2] = "Tuesday"
        weekday[3] = "Wednesday"
        weekday[4] = "Thursday"
        weekday[5] = "Friday"
        weekday[6] = "Saturday"           

   
    var time = weekday[new Date(date).getDay()] + " " + h + ":" + m + ":" + s + " " + ch + "/" + mn + "/" + y
    document.getElementById("timedate").innerText = time
    setTimeout(displaytime, 1000) //таймер вызова функции 1 сек.
}
displaytime()
//проверка браузера IE
function msieversion() {
    var ua = window.navigator.userAgent
    var msie = ua.indexOf("MSIE ") // -1 если нет совпадени€
    var trident = ua.indexOf('Trident/')

    if (msie > 0 || trident > 0)
    {
        alert('You are using the wrong browser');
    }
    return false;
}
msieversion()