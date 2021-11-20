// Seer To Mon convert calculate
function seerToMon(seer) {
    // validation
    if (seer < 1 || typeof seer != "number") {
    return "Error: The value can't be negative or any string";
    }
    // seer calculation
    let result = seer / 40;
    return result;
    }


    // Total product Sales calculate
    function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // Validation
    if (shirtQuantity < 1 && pantQuantity < 1 && shoeQuantity < 1 || (typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number")) {
    return "Error: Negative and string are not allowed";
    }
    // Product per piece cost
    const perShirt = 100;
    const perPant = 200;
    const perShoe = 500;
    // Price calculate
    const shirtQuantityPrice = perShirt * shirtQuantity;
    const pantQuantityPrice = perPant * pantQuantity;
    const shoeQuantityPrice = perShoe * shoeQuantity;
    // Total Price
    const totalPrice = shirtQuantityPrice + pantQuantityPrice + shoeQuantityPrice;
    return totalPrice;
    }


    // DeliveryCost calcuate
    function deliveryCost(shirtQuantity) {
    // validation
    if (shirtQuantity < 1 || typeof shirtQuantity != "number") {
    return "Error: Enter positive number";
    }
    // Delivery Cost
    const first100Delivery = 100;
    const second100Delivery = 80;
    const thirdRestDelivery = 50;
    // Delivery cost calculate
    if (shirtQuantity <= 100) {
    const totalTaka = first100Delivery * shirtQuantity;
    return totalTaka;
    } else if (shirtQuantity > 100 && shirtQuantity <= 200) {
    const firstDeliverCost = 100 * first100Delivery;
    const restDelivery = shirtQuantity - 100;
    const secondDeliverCost = restDelivery * second100Delivery;
    const totalTaka = firstDeliverCost + secondDeliverCost;
    return totalTaka;
    } else {
    const firstDeliverCost = 100 * first100Delivery;
    const secondDeliverCost = 100 * second100Delivery;
    const restDelivery = shirtQuantity - 200;
    const shirtRestDelivery = restDelivery * thirdRestDelivery;
    const totalTaka = firstDeliverCost + secondDeliverCost + shirtRestDelivery;
    return totalTaka;
    }
    }

    
    // PerfectFriend length
    function perfectFriend(friendsName) {
    // validation
    if (typeof friendsName != "object") {
    return "Error: Please enter any valid input";
    }
    let perfectFriends = "";
    for (let element of friendsName) {
    if (element.length == 5) {
    perfectFriends = element;
    }
    break;
    }
    // print output
    return perfectFriends;
    }