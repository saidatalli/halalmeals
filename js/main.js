//The user will enter a meal. Get a meal name, photo, and instructions and place them in the DOM

// Add event listener for the button 
document.querySelector('button').addEventListener('click', getMeal)

// Create a function for getMeal
function getMeal () {
    // Get value that user input on the page
    let meal = document.querySelector('select').value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`) 

   .then(res => res.json()) // parse response as JSON 
   .then(data => { 
       console.log(data.meals[0]) 
       
   // put the result into your HTML
        document.querySelector('h2').innerText = (`Meal name: ${data.meals[0].strMeal}`)

        document.querySelector('img').src = data.meals[0].strMealThumb

        // Make Youtube Video be playable on website
        if(data.meals[0].strYoutube === 'video'){
            document.querySelector('iframe').src = data.meals[0].strYoutube
        } else{
            console.log('Media Not Supported')
        }

        // forEach Loop to search for ingredients and add it to a list
        data.meals.forEach (obj => {
            // console.log(obj.strIngredient)
            // Create an li
            const li1 = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const li4 = document.createElement('li')
            const li5 = document.createElement('li')
            const li6 = document.createElement('li')
            const li7 = document.createElement('li')
            const li8 = document.createElement('li')
            const li9 = document.createElement('li')
            const li10 = document.createElement('li')
            const li11 = document.createElement('li')
            const li12 = document.createElement('li')
            const li13 = document.createElement('li')
            const li14 = document.createElement('li')
            const li15 = document.createElement('li')
            const li16 = document.createElement('li')
            const li17 = document.createElement('li')
            const li18 = document.createElement('li')
            const li19 = document.createElement('li')
            const li20 = document.createElement('li')

            // add text to li
            li1.textContent = obj.strIngredient1
            li2.textContent = obj.strIngredient2
            li3.textContent = obj.strIngredient3
            li4.textContent = obj.strIngredient4
            li5.textContent = obj.strIngredient5
            li6.textContent = obj.strIngredient6
            li7.textContent = obj.strIngredient7
            li8.textContent = obj.strIngredient8
            li9.textContent = obj.strIngredient9
            li10.textContent = obj.strIngredient10
            li11.textContent = obj.strIngredient11
            li12.textContent = obj.strIngredient12
            li13.textContent = obj.strIngredient13
            li14.textContent = obj.strIngredient14
            li15.textContent = obj.strIngredient15
            li16.textContent = obj.strIngredient16
            li17.textContent = obj.strIngredient17
            li18.textContent = obj.strIngredient18
            li19.textContent = obj.strIngredient19
            li20.textContent = obj.strIngredient20
            
            // append the li to the ul
            document.querySelector('ul').appendChild(li1).appendChild(li2).appendChild(li3).appendChild(li4).appendChild(li5).appendChild(li6).appendChild(li7).appendChild(li8).appendChild(li9).appendChild(li10).appendChild(li11).appendChild(li12).appendChild(li13).appendChild(li14).appendChild(li15).appendChild(li16).appendChild(li17).appendChild(li18).appendChild(li19).appendChild(li20)
        })
        // Hard coding the data for ingredients - Issue is that null shows when ingredient is absent
        // document.querySelector('.ingredientsList').innerText = (`Ingredients: 
        //   ${data.meals[0].strIngredient1} 
        //   ${data.meals[0].strIngredient2}
        //   ${data.meals[0].strIngredient3}
        //   ${data.meals[0].strIngredient4}
        //   ${data.meals[0].strIngredient5}
        //   ${data.meals[0].strIngredient6}
        //   ${data.meals[0].strIngredient7}
        //   ${data.meals[0].strIngredient8}
        //   ${data.meals[0].strIngredient9}
        //   ${data.meals[0].strIngredient10}
        //   ${data.meals[0].strIngredient11}
        //   ${data.meals[0].strIngredient12}
        //   ${data.meals[0].strIngredient13}
        //   ${data.meals[0].strIngredient14}
        //   ${data.meals[0].strIngredient15}
        //   ${data.meals[0].strIngredient16}
        //   ${data.meals[0].strIngredient17}
        //   ${data.meals[0].strIngredient18}
        //   ${data.meals[0].strIngredient19}
        //   ${data.meals[0].strIngredient20}
        // `)

        document.querySelector('.instructions').innerText = (`Instructions: 
        ${data.meals[0].strInstructions}
        `)
    })
   .catch(err => { console.log(`error ${err}`) 
    });
}

//The user will enter a meal. Get a meal name, photo, and instructions and place them in the DOM

// Add event listener for the button 
document.querySelector('button').addEventListener('click', getMeal)

// // Create a function for getDrink
// function getMeal () {
//     // Get value that user input on the page
//     let meal = document.querySelector('input').value

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`) 

//    .then(res => res.json()) // parse response as JSON 
//    .then(data => { 
//        console.log(data.meals[0]) 
       
//    // put the result into your HTML
//         document.querySelector('h2').innerText = (`Meal name: ${data.meals[0].strMeal}`)
//         document.querySelector('img').src = data.meals[0].strMealThumb
//         document.querySelector('h3').innerText = data.meals[0].strInstructions
//         // Make Youtube Video be playable on website
//         document.querySelector('video').src = data.meals[0].strYoutube
//     })
//    .catch(err => { console.log(`error ${err}`) 
//     });
// }
