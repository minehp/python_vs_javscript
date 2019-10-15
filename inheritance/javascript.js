class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    jump() {
        console.log(`${this.name} jump !`);
    }
}

let rabbit = new Rabbit('White Rabbit');
rabbit.run(5);
rabbit.jump();
rabbit.stop();
