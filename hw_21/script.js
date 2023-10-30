let shoppingList = [
    {
        name: "Bread",
        quantity: 2,
        purchased: false,
        price: 15,
        total: 30
    },
    {
        name: "Milk",
        quantity: 1,
        purchased: false,
        price: 20,
        total: 0
    },
    {
        name: "Apples",
        quantity: 5,
        purchased: true,
        price: 10,
        total: 50
    }
];

function Sort(arr) {
    arr.sort((a, b) => (a.purchased === b.purchased) ? 0 : a.purchased ? -1 : 1);
    for (let item of arr) {
        alert(`Product: ${item.name} \nPurchased: ${item.purchased}`);
    }
}
function Buy(arr) {
    let chooseProduct = prompt('Choose a product, you want to buy ');
    for (let item of arr) {
        if (chooseProduct == item.name) {
            item.purchased = true;
            alert(`Product: ${item.name} \nPurchased: ${item.purchased}`);
        }
    }
}
function Delete(arr) {
    let newList = [];
    let chooseProduct = prompt('Choose product, you want to delete');
    for (let item of arr) {
        if (item.name != chooseProduct) {
            newList.push(item);
        }
    }
    let listString = newList.map(item => item.name).join('\n');
    alert(`Updated List of Products:\n${listString}`);
    return newList;

}
function Add(arr) {
    let chooseProduct = prompt('Choose product you want to add ');
    let quantity = parseInt(prompt(`Input quantity ${chooseProduct}`));
    let existingProduct = arr.find(item => item.name === chooseProduct);
    if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.total = existingProduct.quantity * existingProduct.price; 
    } else {
        let price = parseFloat(prompt(`Input price ${chooseProduct}`));
        let newProduct = {
            name: chooseProduct,
            quantity: quantity,
            purchased: false,
            price: price,
            total: quantity * price
        };
        arr.push(newProduct);
    }
    for (let item of arr) {
        alert(`Product: ${item.name}\nQuantity: ${item.quantity}\nTotal: ${item.total}`);
    }
}
let choose = prompt('Choose an action: \n 1 - Sort shoping list \n 2 - Buy product from shoping list \n 3 - Delete product from shoping list \n 4 - Add product to the shoping list');
switch (choose) {
    case '1':
        Sort(shoppingList);
        break;
    case '2':
        Buy(shoppingList)
        break;
    case '3':
        Delete(shoppingList);
        break;
    case '4':
        Add(shoppingList);
        break;
    default:
        alert("Error");
        break;
}

