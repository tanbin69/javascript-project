const showcarddiv = document.getElementById("showfoods");
const mealID = localStorage.getItem("mealID");
async function showFood(mealID) {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

    try {
        const res = await fetch(endpoint);
        const data = await res.json();
        const Meal = data.meals[0];

        const carddetail = document.createElement("div");
        carddetail.classList.add("card-detail");

        carddetail.innerHTML = `
            <img src="${Meal.strMealThumb}" alt = "${Meal.strMeal}">
            <h3>Title : ${Meal.strMeal}</h3>
            <p>Instruction : ${Meal.strInstructions}</p>
            <p>Youtube link : ${Meal.strYoutube}</p>
            <p>Category : ${Meal.strCategory}</p>
            <p>Area : ${Meal.strArea}</p>

            <h3>Ingredients</h3>
            <ul id = "IDlist">${Ingredients(Meal)}</ul>
        `;

        showcarddiv.appendChild(carddetail);

    } catch (error) {
        console.log(error);
    }
    function Ingredients(meal){
        let list = "";
        for(let i = 1;i<=20;i++)
        {
          const ingr = meal[`strIngredient${i}`];
          if(ingr && ingr.trim()!== " ")
          {
            list += `<li>${ingr}</li>`;
          }
        }
        return list;
    }
}

showFood(mealID);
