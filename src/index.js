// Import and require graceful-fs, inquirer, Circle, Square, and Triangle modules.
const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");

// Declare Svg class.
class Svg{
// Constructor with three methods for rendering and setting the text and shape elements in the SVG string.
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    } 
};

// Declare questions as an array using the inquirer. Each question is an object that specifies the properties of TEXT, TEXT COLOR, SHAPE COLOR, and Pixel Image.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Please enter up to three (3) letters to use in your logo:"
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Please enter a color keyword -OR- a hexadecimal number:"
    },
    {
        type: "list",
        name: "pixel-image",
        message: "SHAPE: Please select a shape to use in your logo:",
        choices: [ "Circle", "Triangle", "Square" ]
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Please enter a color keyword -OR- a hexadecimal number:"
    },
];

