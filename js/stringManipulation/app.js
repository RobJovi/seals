function reverseString() {

    var string = document.getElementById('string').value;
    console.log(string)
    if (string != '') {
        string = string.split("").reverse().join("");
        document.getElementById('header').innerHTML = 'Your reversed string is: ';
        document.getElementById('output').innerHTML = string;
    } else {
        document.getElementById('header').innerHTML = 'You must input a string first';
    }

}