// 1
// Square of a number
    (function(num){
        num = Math.pow(num, 2);
        return console.log("1 =>",num);
    })
    (10);

// 2    
// Swapping 2 numbers
    let temp;
    (function(num1, num2){
        temp = num2;
        num2 = num1;
        num1 = temp;
        console.log("num1 =>", num1)
        console.log("num2 =>", num2)
    })
    (10,11);

// 3    
// Addition of 3 numbers
    let sum;
    (function(num1, num2, num3){
        sum = num1 + num2 + num3;
        return console.log("3 =>",sum);
    })
    (10, 12, 20);

// 4    
// Celsius to Fahrenheit conversion
    let fahrenheit;
    (function(test_scores){
        fahrenheit = (test_scores * 9/5) + 32;
        return console.log("4 =>",fahrenheit);
    })
    (35);

// 5    
// Meter to miles
   let miles;
        (function(meter){
            miles = meter / 1609.344;
            return console.log("5 =>",miles);
        })
        (1);

// 6        
// Pounds to kg
    let kg;
    (function(pounds){
        kg = pounds * 0.45359237;
        return console.log("6 =>",kg);
    })
    (2);

// 7    
// Calculate Batting Average
    let batting_average;
        (function(total_scores, total_num_wicket){
            batting_average = total_scores / total_num_wicket;
            return console.log("7 =>",batting_average);
        })
        (1000, 20);

// 8        
// Calculate five test scores and print their average
    let average;
    let total_scores = 0;
        (function(test_scores){
            for(let scores of test_scores){
                total_scores += scores;
                average = total_scores / (test_scores.length);
            }
            return console.log("8 =>",average);
        })
        ([100, 21, 43, 109, 76]);

// 9        
// Power of any number x ^ y.
    let power_of_any_num;
        (function(num, power){
            power_of_any_num = Math.pow(num, power);
            return console.log("9 =>",power_of_any_num);
        })
        (3, 2);

// 10        
// Calculate Simple Interest
    let SI;
    (function(Principle, rate, time){
        SI = (Principle * rate * time) / 100;
        return console.log("10 =>",SI);
    })
    (1000, 5, 1);

// 11    
// Calculate area of an equilateral triangle
let area_of_eq_triangle;
(function (sides) {
    let sqrt_3 = (Math.sqrt(3));
    area_of_eq_triangle = (sqrt_3 / 4) * Math.pow(sides, 2)
    return console.log("11 =>",area_of_eq_triangle);
})
(3);

// 12
// Area Of Isosceles Triangle
    let Area;
        (function(base, height){
            Area = (1/2) * (base * height );
            return console.log("12 =>",Area);
        })
        (35, 40);

// 13        
// Volume Of Sphere
    let Volume;
        (function(Radius){
            Volume = (4/3) * Math.PI * Math.pow(Radius, 3);
            return console.log("13 =>",Volume);
        })
        (35);

// 14       
// Volume Of Prism
let Volume_of_prism;
    (function(a, b, h){
        Volume_of_prism = (1/2) * (a * b * h);
        return console.log("14 =>",Volume_of_prism);
    })
    (35, 33, 23);

// 15    
// Find area of a triangle.
    let Area_of_triangle;
            (function(base, height){
                Area_of_triangle = (1/2) * (base * height );
                return console.log("15 =>",Area_of_triangle);
            })
            (53, 23);

// 16            
// Give the Actual cost and Sold cost, Calculate Discount Of Product
    let Discount;
            (function(Actual_c, sold_c){
                Discount = Actual_c - sold_c;
                return console.log("16 =>",Discount);
            })
            (100, 50);

// 17            
// Given their radius of a circle and find its diameter, circumference and area.
    let Diameter;
    let circumference;
    let area;
    (function(Radius) {
        Diameter = Radius * 2;
        circumference = 2 * Math.PI * Radius;
        area = Math.PI * Math.pow(Radius, 2);
        console.log("17(1) =>",Diameter);
        console.log("17(2) =>",circumference);
        console.log("17(3) =>",area);
    })
    (35);

// 18    
// Given two numbers and perform all arithmetic operations.
    let summ;
    let sub;
    let mult;
    let div;
        (function(num1, num2){
            summ = num1 + num2;
            sub = num1 - num2;
            mult = num1 * num2;
            div = num1 / num2;
            console.log("18(1) =>",summ);
            console.log("18(2) =>",sub);
            console.log("18(3) =>",mult);
            console.log("18(4) =>",div);
        })
        (10, 15);

// 19        
// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
// Calculate the total energy bill of that consumer if per unit rate is 10?
let total_watts;
let total_price;
(function (days) {
    total_watts = 100 * days;
    total_price = (total_watts / 1000) * 10;
    return console.log("19 =>",total_price);
})
(30);

// 20
// Program To Calculate CGPA
let sum_of_GP = 0;
let CGPA;
(function (Grade_points) {
    for(let points of Grade_points){
        sum_of_GP += points;
    }
    CGPA = sum_of_GP / Grade_points.length;
    return console.log("20 =>",CGPA);
})
([89, 90, 100, 94, 88, 85, 90])

