// Your code here
class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let perimeter = this.array.reduce((p, c) => p + c, 0)
        return perimeter
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.array.length === 3){
            if(this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[1] + this.array[2] > this.array[0]){
                return true
            } else {
                return false
            }
        } else {
            return `Not a triangle!`
        }
    }
}

class Square extends Polygon {
    get area(){
        if(this.array.length === 4){
            return Math.pow(this.array[0], 2)
        }else {
            return `Not a quadrilateral!`
        }
    }

    get isValid(){
        if(this.array.length === 4){
            let totalSides = this.array.reduce((p, c) => p + c, 0)

            if(totalSides / this.array.length === this.array[0]){
                return true
            } else{
                return false
            }
        } else{
            return `Not a quadrilateral!`
        }

    }
}

let test = new Polygon([1, 2, 3])
let test2 = new Triangle([5, 5, 5])
let test3 = new Square([5, 5, 5, 5])

console.log(test.countSides);
console.log(test.perimeter);
console.log(test2.isValid);
console.log(test3.area);
console.log(test3.isValid);
