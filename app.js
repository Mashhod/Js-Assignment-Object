var plan1 = { 
    name: "Basic", 
    price: 3.99, 
    space: 100, 
    transfer: 1000, 
    pages: 10, 
    discountMonths: [6, 7, 10], 
    disCount: 0.80 }; 
    
    
var plan2 = { 
    name: "Advance", 
    price: 5.99, 
    space: 100, 
    transfer: 1000, 
    pages: 10, 
    discountMonths: [6, 7, 10], 
    disCount: 0.75 }; 
    
    var plan3 = { 
        name: "Ultimate", 
        price: 8.99, 
        space: 100, 
        transfer: 1000, 
        pages: 10, 
        discountMonths: [6, 7, 10], 
        disCount: 0.70 
    };


    function calculatePrice(plan1) {
        let packagePrice = plan1.price;
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();

        for (let i = 0; i < plan1.discountMonths.length; i++){
            if (plan1.discountMonths[i] == currentMonth){
                packagePrice = packagePrice * 0.8;
            }
        }
        return packagePrice * 12

    };

    alert(calculatePrice(plan3));