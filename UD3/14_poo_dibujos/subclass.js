class Figure {
    print() {
        console.log('I\'m a figure');
    }
}

class Square extends Figure {
    print() {
        console.log('I\'m a square');
    }
}

class Circle extends Figure {
}

class Triangle extends Figure {
    print() {
        super.print();
        console.log('and a triangle')
    }
}


let draws = [new Figure(), new Square(), new Circle(), new Triangle()]
draws.forEach(f => f.print())