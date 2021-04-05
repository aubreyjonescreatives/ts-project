import * as _ from 'lodash' 
import './pages/styles.css'




window.addEventListener('load', () => {

fetch ('https://pokeapi.co/api/v2/pokemon')
.then((mydata => mydata.json()))
.then((mydata) => {
    console.log(mydata)
    console.log(mydata.results[0].name)
    





    const header = document.createElement('h1')
    header.innerText = "Pokemon" 
    const header2 = document.createElement('h2')
    header2.innerText = "Collect Them All!"
    const body = document.querySelector('body')  
   
    body.appendChild(header)
    body.appendChild(header2)
   

    
    const pokemon = [
        {
            id: 0, 
            name: mydata.results[0].name, 
            image: `${mydata.results[0].sprites}`, 
            url: mydata.results[0].url
        }, 
        {
            id: 1, 
            name: mydata.results[1].name,
            image: `${mydata.results[1].sprites}`,  
            url: mydata.results[1].url
        },
        {
            id: 2, 
            name: mydata.results[2].name,
            image: `${mydata.results[2].sprites}`,  
            url: mydata.results[2].url
        },
        {
            id: 3, 
            name: mydata.results[3].name, 
            image: `${mydata.results[3].sprites}`,  
            url: mydata.results[3].url
        },
    ]; 

    const listItem1 = document.createElement('li')
    listItem1.innerText = _.find(pokemon, {id: 0})?.name;

    const button1 = document.createElement('button')
    button1.innerText = "MORE INFORMATION"; 
    button1.addEventListener("Click", function() {
        document.getElementById('button').innerHTML = mydata.results[0].url
    } )

    const img1 = document.createElement('img')
    img1.src = pokemon[0].image
    
    const listItem2 = document.createElement('li')
    listItem2.innerText = _.find(pokemon, {id: 1})?.name; 
    

    const button2 = document.createElement('button')
    button2.innerText = "MORE INFORMATION"; 
    

    const listItem3 = document.createElement('li')
    listItem3.innerText = _.find(pokemon, {id: 2})?.name; 
    

    
    const button3 = document.createElement('button')
    button3.innerText = "MORE INFORMATION"; 
    

    const listItem4 = document.createElement('li')
    listItem4.innerText = _.find(pokemon, {id: 3})?.name; 
    

    
    const button4 = document.createElement('button')
    button4.innerText = "MORE INFORMATION"; 
    


    body.appendChild(listItem1); 
    body.appendChild(button1); 
    body.appendChild(img1)
    body.appendChild(listItem2);
    body.appendChild(button2);
    body.appendChild(listItem3); 
    body.appendChild(button3);
    body.appendChild(listItem4); 
    body.appendChild(button4);


   
 





})
})
