// Declare Shape class.
class Shape{
// Constructor for initalizing color.
    constructor(){
        this.color=''
    }
// Sets the 'color' value.
    setColor(color){
        this.color=(color);
    }
}
// Declare circle class as a child of Shape. Render an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}