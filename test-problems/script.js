
// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
document.getElementById('heading').innerText = 'Javascript'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

document.querySelector('.paragraph').innerText = 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector

document.querySelector('h3').innerText = "Things I've accomplished so far"

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
document.querySelectorAll('p')[1].innerText = 'I have discovered that I can accomplish anything I put my mind to'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable
let firstInput = document.querySelector('data-firstMultiply')

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 5.2. Attach the second input to a variable
let secondInput = document.querySelectorAll('data-secondMultiply')
// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
let firstButton = document.querySelectorAll('data-calculate1')

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going  
let firstSpan = document.querySelectorAll('span')[0]

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function multiply() {
let finalInput = (firstInput * secondInput) 

}


//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 5.6. Add an event listener to the button that runs the function that tyou created

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 



// 6.2 Set the send modulud input to a variable
// 6.3 Set the SECOND span to a varable(will display answer)
// 6.4 Set the SECOND button to a variable(to run event listener)
// 6.5 Create a normal function to calculate the modulus of the inputs
// 6.6 Add an event listener to the button which will run the function you created

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementById('bubbleTea').innerText = 'White Tea'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.querySelector('.greenTea').innerText = 'Black Tea'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
document.querySelectorAll('li')[3].innerText = 'Herbal Tea'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = "September"

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3] = 'Lamborghini'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
// 12. Use a for loop to loop through the array, and console.log every value inside of the array.

//****** 
for (let i = 0; i < coolCars.length; i++) {
    console.log(coolCars)
}
//*****
//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


// 13. Reverse the array and console.log the reversed array.
coolCars.reverse()

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
coolCars.pop()

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
coolCars.unshift('Mercedes')

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


//16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
let age = 18
let a = 17
if (a>18) {
    console.log('this person is old enough')
}else {
    console.log('You are underage');
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 17. Make use of a switch statement and create a possible solution for no.16
switch(true) {
    case 1 (a < 18):
        console.log('Under age')
        break;
        case 2 (a > 18):
        console.log('Old enough')
        break;
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 18.     USE A SWITCH statement!!!!!

// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')


let mathsResult = 77
let physicsResult = 70
let englishResult = 50

let markAdd1 = (mathsResult + physicsResult + englishResult)
let markResult = (markAdd/300*100).toFixed(2)

console.log(markResult)
switch(true){
   case 1 (mark >= 80 && mark <=100):
    console.log('You did well your average was ${markResult}');
    break;
    case 2 (mark >= 70 && mark <=79):
    console.log('You average was good, it was ${markResult}');
    break;
    case 3 (mark >= 50 && mark <=69):
    console.log('Your average was okay, it was ${markResult}');
    break;
    case 4 (mark >= 0 && mark <=49):
    console.log('You must work harder next time ${markResult}');
    break;
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1

while (parentsAge <= 20) {
    console.log(parentsAge);
    parentsAge++;
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 20. USE while or a do while loop to print out the array of Question15(coolCars).


 do{
   console.log(coolCars);
    coolCars++;
} while (coolcars)

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
let chair = {
legs : 4,
material : plastic
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.

chair.armRestBars = 'none'

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 23.1.   What code will I write to view the value of the armRestBars.
console.log(chair.armRestBars);

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 23.2    What code can I use to delete the property of legs with the value of 4.
delete chair.legs;

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description

function createDevice(name, type, year, description) {
    return {
       name: name,
        type: type,
        year: year,
        description,
    };
}
let device1 = createDevice('Tv', 'entertainment device', 1926, 'is an electronic device that receives broadcast signals, typically through an antenna or cable connection, and converts them into audio and visual content displayed on a screen.');
let device2 = createDevice('Laptop', 'Computer', 1981, 'is a portable personal computer designed for mobile use.');
let device3 = createDevice('coffee maker', 'Appliance',1865 ,'A coffee maker is a kitchen appliance designed to brew coffee by passing hot water through ground coffee beans, extracting the flavor and creating a liquid coffee beverage.' );


console.log(device1)
console.log(device2)
console.log(device3)

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 24. Create 4 objects of your choice using a factory function and console.log() each of them

let person = {
    name: "Jason",
    surname: "September",
    age: "Undefined"
}

let favAnime = {
    name: "Konosuba",
    Protagonist : "Kazuma",
    death: "Died of shock"
}

let favMovie = {
    name: "Kung fu hustle",
    protagonist: "The guy that gets beat up by the old land lady of pigsty village"
}

let favCar = {
    name: "Ford",
    model: "Mustang"
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

function Car(brand, model, year, transmission, drivetrain) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.drivetrain = drivetrain;
}

const carOne = new Car('Toyota', 'Camry', 2022, 'Automatic', 'Front Wheel Drive');
const carTwo = new Car('Ford', 'Mustang', 2021, 'Manual', 'Rear Wheel Drive');
const carThree = new Car('Honda', 'CR-V', 2023, 'CVT', 'All Wheel Drive');

console.log(carOne);
console.log(carTwo);
console.log(carThree);

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 26. Create 4 objects of your own and print to the console all of the created objects.

let car1 = {
    name: 'VolsWagen',
    model: 'Golf',
}
console.log(car1)

let car2 = {
    name: 'BMW',
    model: 'i7',
}
console.log(car2)

let car3 = {
    name: 'Porche',
    model: 'Porsche 718 Boxster',
}
console.log(car3)

let car4 = {
    name: 'Ford',
    model: 'Ford Mustang GT'
}
console.log(car4)

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 27. After, push the 4 objects to an array called 'informationAboutCars'.
//****
let informationAboutCars = [];
informationAboutCars.push({car1} , {car2} , {car3} , {car4})
//*******

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'

function object() {
    return car = {
        brand: 'ford',
        model: 'figo',
        produced: 2019,
        transmission: 'manual',
        drivetrain: 'front wheel drive',
    }
}
object()

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

if(coolCars.includes('BMW')){
    console.log('This item does appear in the array')
} else {
    console.log('The item does not appear in the array')
}

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
let array = [5, 18, 14, 16, 2, 1]
console.log(array[2],array[3])

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message must be written to the html page in the corresponding element
