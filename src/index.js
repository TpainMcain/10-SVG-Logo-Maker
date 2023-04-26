// Import and require graceful-fs, inquirer, Circle, Square, and Triangle modules.
const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");

// Declare Svg class.
class Svg {
// Constructor with three methods for rendering and setting the text and shape elements in the SVG string.
    constructor() {
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

// Declare questions as an array using inquirer. Each question is an object that specifies the properties of text, text-color, pixel-image and shape.
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

// Begin function to save user data to filesystem.
function writeToFile(fileName, data) {
	console.log("Saving [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You have successfully generated a logo.svg!");
    });
};

// Begin function to generate logo.svg.
async function generate() {
    console.log("Initilizing SVG Logo Maker");
	var svgString = "";
	var svg_file = "logo.svg";
// Declare answers using user input from questions.
    const answers = await inquirer.prompt(questions);
// Declare user_text using user input from answers.
    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
// Validate user has enetered 1-3 letters.
        user_text = answers.text;
    } else {
// If 0 or 4+ letters, display error.
        console.log("Please enter a valid number of letters (1-3)");
        return;
    }
// Display the number of letters selected by user in console.
    console.log("User text: [" + user_text + "]");
// Declare user_font_color using user input from answers. Display user_font_color in console.
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");
// Declare user_shape_type using user input from answers. Display user_shape_type in console.
    user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");
// Declare user_shape_color using user input from answers. Display user_shape_color in console.
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
// Declare user_shape. Create new user_shape using user input from user_shape_type. Display message with user selected shape in console. Display error for invalid shape.
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("You have selected Square!");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("You have selected Circle!");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("You have selected Triangle!");
    }
    else {
        console.log("Invalid shape!");
    }
// Set the color of user_shape using user input from user_shape_color.
    user_shape.setColor(user_shape_color);
// Declare new Svg instance and add the user's selected shape and text elements to it.
	var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
// Display shape in log.
	console.log("Displaying shape:\n\n" + svgString);
// Save data to file and console log progress.
	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile(svg_file, svgString); 
}
// Initilize function to generate SVG.
generate()
    