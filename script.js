
alert("-------WellCome to Radision---------")

let name = prompt("Please Enter your name");
let price = 0 ;
do {
    let add = prompt("Enter 1 to Indian \nEnter 2 to Itailian \nEnter 3 to Chinese");
    if(add == 1){
        alert("Wellcome to Indian Menu")
        do {
            
            let ind = +prompt("Enter 1 : Dal Bati -$110 \nEnter 2 : Chole Kulche - $100 \nEnter 3 : Aaloo paratha - $105")
            switch (ind) {
                case 1:
                    alert("your order -- Dal Bati (rs 110)")
                    price += 110;
                    break;

                case 2:
                alert("your order -- Chole Kulche (rs 100)")
                price += 120;
                break;

                case 3:
                alert("your order -- Aaloo Paratha (rs 105)")
                price += 102;
                break;

                default:
                    alert("Wrong input please try again")
                    break;
            }

            
        } while (confirm("Do you want to oreder Indian items"));
    }
    if(add == 2){
        alert("Wellcome to Itailian Menu")
        do {
            
            let it = +prompt("Enter 1 : Pizza - $130 \nEnter 2 : Pasta - $120 \nEnter 3 : Gelato - $102")
            switch (it) {
                case 1:
                    alert("your order -- Pizza (rs 130)")
                    price += 130;
                    break;

                case 2:
                alert("your order -- Pasta (rs 120)")
                price += 120;
                break;

                case 3:
                alert("your order -- Gelato (rs 102)")
                price += 102;
                break;

                default:
                    alert("Wrong input please try again")
                    break;
            }

            
        } while (confirm("Do you want to oreder Itailian items"));
    }

    if(add == 3){
        alert("Wellcome to chinese Menu")
        do {
            
            let ch = +prompt("Enter 1 : Noodels - $90 \nEnter 2 : Mancurians - $100 \nEnter 3 : Fried Rice - $103")
            switch (ch) {
                case 1:
                    alert("your order -- Noodels (rs 90)")
                    price += 90;
                    break;

                case 2:
                alert("your order -- Manchurians (rs 100)")
                price += 100;
                break;

                case 3:
                alert("your order -- Fried Rice (rs 105)")
                price += 105;
                break;

                default:
                    alert("Wrong input please try again")
                    break;
            }

            
        } while (confirm("Do you want to oreder Chinese items"));
    }
   

    
} while (confirm("Do you want to add items")){
  
    alert(`${name} sir your Total bill = ${price}`);
}