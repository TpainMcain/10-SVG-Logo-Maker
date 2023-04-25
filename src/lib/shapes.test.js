// Import and require {Circle, Triangle, Square} from shapes.js.
const {Circle, Triangle, Square} = require("./shapes")

// Test suite for the shape class. The test checks whether the {Circle, Triangle, Square} object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.
// Test for circle.
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
// Test for triangle.
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});
// Test for square.
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});
