document.querySelector("button").addEventListener( "click" , function(){
    const userName = document.getElementById("user-id");
    document.getElementById("user-id").innerHTML = (userName.value);
    if(userName.value == " "){
        document.getElementById("user-id").innerHTML = "Nessun nome";
    }
    userName.value = " ";
    const userKm = parseFloat(document.getElementById("travel-distance").value);
    const pricePerKm = 0.27;
    let partialPrice = userKm * pricePerKm;


    let select = document.querySelector("select");
    let value = select.options[select.selectedIndex].value;

    console.log(value);

    if(value == "0-17"){
        let ageDiscount = 0.17;
        partialPrice -= partialPrice * ageDiscount;
        let totalPrice = partialPrice;

        document.getElementById("promo-ticket").innerHTML = "Biglietto Under 18";

        document.getElementById("ticket-price").innerHTML = totalPrice.toFixed(2) + "€";
    } else if(value == "66-100"){
        let ageDiscount = 0.33;
        partialPrice -= partialPrice * ageDiscount;
        let totalPrice = partialPrice;

        document.getElementById("promo-ticket").innerHTML = "Biglietto Over 65 ";

        document.getElementById("ticket-price").innerHTML = totalPrice.toFixed(2) + "€";
    }else{
        let totalPrice = partialPrice;

        document.getElementById("promo-ticket").innerHTML = "Biglietto Standard";

        document.getElementById("ticket-price").innerHTML = totalPrice.toFixed(2) + "€";
    }


    document.getElementById("truck-num").innerHTML = Math.floor(Math.random() * 10 + 1);

    document.getElementById("cp-code").innerHTML = Math.floor((Math.random()*100000) +1);
})

document.getElementById("cancel").addEventListener( "click" , function(){
    const userName = document.getElementById("user-id");
    userName.value = " ";

    const userKm = document.getElementById("travel-distance");
    userKm.value = " ";

    let select = document.querySelector("select");
    select.value = " ";
});