
var divListByTagName = document.getElementsByTagName('div');

for (var i = 1; i <= divListByTagName.length; i++){
    if (i % 2){
        divListByTagName[i-1].innerText = 'Я нечетный элемент №' + (i + 1)/2;
    } else {
        divListByTagName[i-1].innerText = 'Я четный элемент №' + i/2; 
    }
}