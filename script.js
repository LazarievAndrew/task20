
var divListByTagName = document.getElementsByTagName('div');

for (var i = 0; i < divListByTagName.length; i++){
    if (i%2){
        divListByTagName[i].innerText = 'Я четный элемент №' + (i + 1)/2;
    } else {
        divListByTagName[i].innerText = 'Я нечетный элемент №' + (1 + i - (1 * i)/2);  // еще вариант ((1 + i)*2 - 1 * i)/2
    }
}