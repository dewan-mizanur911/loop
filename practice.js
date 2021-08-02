var fruitNames = ['Mango', 'Orange', 'Berry', 'banana', 'Jackfruit', 'Lichie'];
var isTruckAvailable = false;
var isTrainAvailable = true;

if (isTruckAvailable == true || isTrainAvailable == true) {
        fruitNames.unshift('avacado');
    for(var i = 0; i < fruitNames.length; i++){
        var singleFruit = fruitNames[i];
        console.log(singleFruit);
    }
}
else{
    console.log('Age truck anen,pore mal jaibo');
}