let number_of_leg = (turkey, horse, pigs) => {
    let turkey_legs = turkey * 2;
    let horse_legs = horse * 4;
    let pigs_legs = pigs * 4;
    let total_number_of_legs = turkey_legs + horse_legs + pigs_legs;
    return total_number_of_legs;
}
console.log(number_of_leg(2, 3, 5));
console.log(number_of_leg(1, 2, 3));
console.log(number_of_leg(5, 2, 8));