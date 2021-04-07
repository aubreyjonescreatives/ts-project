import * as _ from 'lodash' 
import './pages/styles.css'


//const response = await fetch('https://swapi.dev/api/people/1/')


fetch ('https://swapi.dev/api/')
.then((mydata => mydata.json()))
.then((mydata) => {
    console.log(mydata)
    console.log(mydata.people[0].name)
    

interface Character {
    id: 0;
    name: string; 
    hair_color: string; 
    height: number;
    
}


function CharacterName(character: Character) {
    return "Hello" + character.name; 
}


const body = document.querySelector('body')
const header1 = document.createElement('h1')
header1.innerText = _.find(Character, {id: 0})?.name;
body.appendChild(header1)
const character = document.createElement('h2')
character.innerText = _.find(Character, {id: 0})?.name;
body.appendChild(character)
const names = document.createElement('div')



interface Person {
    name: string; 
    age: number; 
}


function greet(person: Person) {
    return "Hello" + person.age; 
}

const greetingText = document.createElement('div') 
greetingText.innerText = _.find(greet)
body.appendChild(greetingText)


type PersonB = {
    name: string; 
    age: number; 
}


function greet2(person: PersonB) {
    return "Hello" + person.age; 
}


type ResponseA = {
    welcomeMessage: "Welcome to my Star Wars Page." 
}



function message1(message: ResponseA) {
    return message.welcomeMessage; 
}


type ResponseB = {
    welcomeMessage2: "Feel free to get to know the characters." 
}


function message2(message: ResponseB) {
    return message.welcomeMessage2; 
}
