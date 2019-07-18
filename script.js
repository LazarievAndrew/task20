
var divListByTagName = document.getElementsByTagName('div');

function counter(){
    var count = 1;
    return function(){
        return count++;
    };
}

var count1 = counter();
var count2 = counter();

for (var i = 0; i < divListByTagName.length; i++){
    if (i%2){
        divListByTagName[i].innerText = 'Я четный элемент №' + count1();
    } else {
        divListByTagName[i].innerText = 'Я нечетный элемент №' + count2();
    }
}