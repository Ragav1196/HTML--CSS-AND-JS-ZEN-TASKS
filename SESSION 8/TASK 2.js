class Circle {
    constructor(radius=1.0, color="red"){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return (this.radius);
    }

    setRadius(Radius){
        this.radius = Radius;
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
        return this.color;
    }

    toString(){
        let circle = [];
        circle.push(this.radius, this.color);
        return circle;
    }

    getArea(){
        let area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }

    getCircumference(){
        let Circumference = 2 * Math.PI * this.radius;
        return Circumference;
    }

}
const circle_1 = new Circle();
console.log(circle_1);
console.log(circle_1.getRadius());
console.log(circle_1.setRadius(3));
console.log(circle_1.getColor(3));
console.log(circle_1.setColor("crimson"));
console.log(circle_1.toString());
console.log(circle_1.getArea());
console.log(circle_1.getCircumference());
