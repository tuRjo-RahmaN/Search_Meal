const meal = (search) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeal(data.meals))
}

function displayMeal(meals)
{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    meals.forEach(meal =>
        {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = 
            `
            <div class="card h-100 border-2 border-black">
                <div class="card-body p-3 bg-dark-subtle">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

                  <h5 class="card-title">${meal.strMeal}</h5>
                  
                  <button onclick="mealsDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                  Details
                  </button>
                </div>

                <div class="card-footer">
                  <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>

              </div>
              `

              mealContainer.appendChild(mealDiv);

        })
    
}

function searchMeal()
{
    const inputField = document.getElementById('input-field').value;

    meal(inputField);
}


const mealsDetail = idMeal =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {

            document.getElementById('mealDetailsLabel').innerText = data.meals[0].strMeal;

            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML =
            `
            <img style="width:250px" class="img-fluid rounded mb-5" src="${data.meals[0].strMealThumb}">
            
            <p class="card-text"> <b>Ingredients:</b> ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5} & etc</p>
            
            <p> <b>How to make: </b>${data.meals[0].strInstructions} </p>
            `

        })

}

meal('chicken');