// Declare Shape class.
class Shape {
// Constructor for initalizing color.
    constructor () {
        this.color=''
    }
// Sets the 'color' value.
    setColor(color) {
        this.color=(color);
    }
}
// Declare Circle class as a child of Shape. Render an SVG circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
// Declare Triangle class as a child of Shape. Render an SVG triangle with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
}
// Declare Square class as a child of Shape. Render an SVG square with position, size, and fill color based on the current instance's properties.
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
};

module.exports = {Circle, Triangle, Square}