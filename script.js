var total = 0;

function addItem() {
    var item = document.getElementById('item').value;
    var price = parseFloat(document.getElementById('price').value);
    // var price = document.getElementById('price');  se corregio el erro agregandole un parseFloat(.value)
    var shoppingList = document.getElementById('shoppingList');
    var totalDisplay = document.getElementById('total');


    // se cambio de div a li 
    var li = document.createElement('li'); // cambio de div a li
    li.textContent = item + ' - $' + price.toFixed(2); // aplico toFixed a un numero 
    shoppingList.appendChild(li);

    total += price; // se elimino el  parseFloat(price) y se dejo solo price
    totalDisplay.textContent = 'Total: $' + total.toFixed(2);

    // Limpieza ineficiente de campos
    document.getElementById('articulo').value = 'item';// se agrego el item
    document.getElementById('precio').value = 'price'; // se agrego el price
}

var button = document.querySelector('button');
button.addEventListener('click', addItem);