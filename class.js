class Product{
    country = 'Bangladesh'
    constructor(name){
        this.name = name;
    }
    status(discount){
        console.log(`${discount}, is on 25% discount`)
    }
}

const lenevo = new Product('Lenevo');
console.log(lenevo);
lenevo.status("Lenevo")

class Teacher{
    post = 'Lecturer'
    institution = 'Brac University'
    constructor(name, age){
        this.name = name
        this.age = age
    }
    subject(name, sub){
        console.log(`${name} is teaching ${sub}`)
    }
}

const PDS = new Teacher('PDS', 30);
console.log(PDS)
PDS.subject('PDS', 'CSE250')

// OOP
class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}