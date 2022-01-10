// CLASS TO CALCULATE UBER PRICE
class uber_price{
    constructor(car_type, Minimum_fare, rate_per_KM){
        this.car_type = car_type;
        this.Minimum_fare = Minimum_fare;
        this.rate_per_KM = rate_per_KM;
    }

    calculate_price(total_KM){
        if(total_KM <= 2){
            return "Amount to be paid =>", this.Minimum_fare;
        }
        else{
            let price = total_KM * this.rate_per_KM;
            return Math.round(price);
        }
    }
}

const economy = new uber_price("Uber_go", 25, 15);
const second_class = new uber_price("Go_sedan", 30, 18);
const first_class = new uber_price("UberXL", 60, 35);

console.log(first_class.calculate_price(2));
