

$('#btn-close').hide();

$('#open').click(function () {
  $('#btn-close').show();
  $('#open').hide();

  $('.side-nav').animate({
    left: '0px',
  }, 1000)
})

$('#btn-close').click(function () {
  $('#btn-close').hide();
  $('#open').show();

  $('.side-nav').animate({
    left: '-180px',
  }, 1000)
})


$('#one').click(function () {
  $('#home').addClass('d-none');
  $('#Search').removeClass('d-none');
  $('#Category').addClass('d-none');
  $('#Area').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#Contact').addClass('d-none');
  $('#details').addClass('d-none');

})

$('#two').click(function () {
  $('#home').addClass('d-none');
  $('#Category').removeClass('d-none');
  $('#Search').addClass('d-none');
  $('#Area').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#Contact').addClass('d-none');
  $('#details').addClass('d-none');
})

$('#three').click(function () {
  $('#home').addClass('d-none');
  $('#Area').removeClass('d-none');
  $('#arDetail').addClass('d-none');
  $('#Category').addClass('d-none');
  $('#Search').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#Contact').addClass('d-none');
  $('#catDetails').addClass('d-none');
  $('#details').addClass('d-none');
})

$('#four').click(function () {
  $('#home').addClass('d-none');
  $('#Area').addClass('d-none');
  $('#Search').addClass('d-none');
  $('#Category').addClass('d-none');
  $('#Ingredients').removeClass('d-none');
  $('#Contact').addClass('d-none');
  $('#arDetail').addClass('d-none');
  $('#catDetails').addClass('d-none');
  $('#details').addClass('d-none');

})
$('#five').click(function () {
  $('#home').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#Contact').removeClass('d-none');
  $('#Area').addClass('d-none');
  $('#Category').addClass('d-none');
  $('#Search').addClass('d-none');
  $('#details').addClass('d-none');
})

$(window).ready(function () {
  $('#load').show().delay(2000).fadeOut('slow');
  $('#load').removeClass('d-none')

})

async function addMeal() {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  let meal = await getApi.json();
  let data = meal.meals;
  let cartona = ``;
  for (let i = 0; i < data.length; i++) {
    cartona += ` <div  class="col-md-3 gy-4">
<div class="card position-relative ">
  <img src="${data[i].strMealThumb}">
  <div class="layer rounded-3 position-absolute d-flex align-items-center ">
    <h3 class=" text-dark p-3">${data[i].strMeal}</h3>
  </div>
</div>
</div>`
  }
  document.getElementById('cards').innerHTML = cartona;
}
addMeal()

async function getDetails() {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  let meal = await getApi.json();
  let data = meal.meals;
  $('.card').click(function () {
    $('#home').addClass('d-none');
  })

  for (let i = 0; i < data.length; i++) {
    let cardElements = document.getElementsByClassName('card');
    cardElements[i].addEventListener('click', function (event) {
      let clickedMeal = data[i];
      let x = clickedMeal;

      let cartona = ``;

      cartona += `<div class="col-md-4">
  <div class="ingrediant">
    <img src="${x.strMealThumb}" alt="" class="w-100 rounded-4">
    <h3 class="text-white">${x.strMeal}</h3>
  </div>
  </div>
  <div class="col-md-8">
  <div class="disc text-white position-relative">
  <i class="fa-solid fa-xmark fa-2x" id="close"></i>
    <h2>Instructors</h2>
    <p class="p-ing">${x.strInstructions}</p>
    <h3 class="area"><span>Area</span>: ${x.strArea}</h3>
    <h3 class="catego"><span>Category </span>: ${x.strCategory}</h3>
    <h2 class="">Recipes :<span class="fw-semibold w-25 fs-5">
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-info m-2 p-1">${x.strMeasure1}${x.strIngredient1} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure2}${x.strIngredient2} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure3}${x.strIngredient3} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure4}${x.strIngredient4} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure5}${x.strIngredient5} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure6}${x.strIngredient6} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure7}${x.strIngredient7} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure8}${x.strIngredient8} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure9}${x.strIngredient9} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure10}${x.strIngredient10} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure11}${x.strIngredient11} </li>
          <li class="alert alert-info m-2 p-1">${x.strMeasure12}${x.strIngredient12} </li>
        </ul>
      </span></h2>
      <h2 class="">Tags :<span class="fw-semibold fs-5">
            <ul class="list-unstyled d-flex g-3 flex-wrap my-3">

              <li class="alert alert-danger m-2 p-1">Soup</li>
            </ul>
          </span></h2>
        <a target="_blank" href="${x.strSource}"
          class="btn btn-success">Source</a>
        <a target="_blank" href="${x.strYoutube}" class="btn btn-danger">Youtube</a>
  </div>
  </div>`
      document.getElementById('getdetails').innerHTML = cartona;
      $('#close').click(function () {
        $('#details').addClass('d-none');
        $('#home').removeClass('d-none');
      })
      $('#details').removeClass('d-none');
    });
  }
}
getDetails()


// search bar
async function byName(search) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  let name = await getApi.json();
  let meal = await name.meals;
  let cartona = ``;
  for (let i = 0; i < meal.length; i++) {
    cartona += ` <div class="col-md-3 gy-4">
    <div class="card position-relative ">
    <img src="${meal[i].strMealThumb}">
    <div class="layer rounded-3 position-absolute d-flex align-items-center ">
    <h3 class=" text-dark">${meal[i].strMeal}</h3>
    </div>
    </div>
    </div>`
  }
  document.getElementById('cardSearch').innerHTML = cartona;
}


$('#byName').keyup(function (e) {
  let inputSearch = e.target;
  let search = inputSearch.value;
  byName(search)
  console.log('yes')
});



// search by letter

async function byLetter(find) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${find}`)
  let name = await getApi.json();
  let meal = name.meals;

  let cartona = ``;
  for (let i = 0; i < meal.length; i++) {

    cartona += ` <div class="col-md-3 gy-4">
    <div class="card position-relative ">
    <img src="${meal[i].strMealThumb}">
    <div class="layer rounded-3 position-absolute d-flex align-items-center ">
    <h3 class=" text-dark">${meal[i].strMeal}</h3>
    </div>
    </div>
    </div>`
  }
  document.getElementById('firstLetter').innerHTML = cartona;

}
$('#firstLetter').keyup(function (e) {
  console.log('yes')
  let inputSearch = e.target;
  let find = inputSearch.value;
  console.log(find)
  byLetter(find)
});



// display them
async function getThem(mealId) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  let meal = await getApi.json();
  meal = meal.meals;

  console.log(await meal)
  console.log(await meal[0])

  let cartona = ``;

  cartona += `<div class="col-md-4">
  <div class="ingrediant">
    <img src="${await meal[0].strMealThumb}" alt="" class="w-100 rounded-4">
    <h3 class="text-white">${await meal[0].strMeal}</h3>
  </div>
  </div>
  <div class="col-md-8">
  <div class="disc text-white position-relative">
  <i class="fa-solid fa-xmark fa-2x" id="close"></i>
    <h2>Instructors</h2>
    <p class="p-ing">${meal[0].strInstructions}</p>
    <h3 class="area"><span>Area</span>: ${meal[0].strArea}</h3>
    <h3 class="catego"><span>Category </span>: ${meal[0].strCategory}</h3>
    <h2 class="">Recipes :<span class="fw-semibold w-25 fs-5">
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure1}${meal[0].strIngredient1} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure2}${meal[0].strIngredient2} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure3}${meal[0].strIngredient3} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure4}${meal[0].strIngredient4} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure5}${meal[0].strIngredient5} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure6}${meal[0].strIngredient6} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure7}${meal[0].strIngredient7} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure8}${meal[0].strIngredient8} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure9}${meal[0].strIngredient9} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure10}${meal[0].strIngredient10} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure11}${meal[0].strIngredient11} </li>
          <li class="alert alert-info m-2 p-1">${meal[0].strMeasure12}${meal[0].strIngredient12} </li>
        </ul>
      </span></h2>
      <h2 class="">Tags :<span class="fw-semibold fs-5">
            <ul class="list-unstyled d-flex g-3 flex-wrap my-3">

              <li class="alert alert-danger m-2 p-1">Soup</li>
            </ul>
          </span></h2>
        <a target="_blank" href="${meal[0].strSource}"
          class="btn btn-success">Source</a>
        <a target="_blank" href="${meal[0].strYoutube}" class="btn btn-danger">Youtube</a>
  </div>
  </div>
  `
  document.getElementById('getdetails').innerHTML = cartona;

  $('#getDetails').removeClass('d-none');
  $('#category').addClass('d-none');
  $('#ingrediantDetails').addClass('d-none');
  $('#area').addClass('d-none');
  $('#Category').addClass('d-none');
  $('#catDetails').addClass('d-none');

}


// category



async function getCat() {
  let catApi = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let cat = await catApi.json();
  let category = cat.categories;
  let cartona = ``;
  for (let i = 0; i < category.length; i++) {
    let slicedDescription = category[i].strCategoryDescription.slice(0, 100);

    cartona += `
      <div class="col-md-3 gy-4 ">
        <div class="card position-relative" > 
          <img src="${category[i].strCategoryThumb}" class="bg-black">
          <div class="layer rounded-3 position-absolute">
            <div class="info d-flex flex-column justify-content-center align-items-center text-center mb-4"> 
              <h3 class="text-dark pt-2">${category[i].strCategory}</h3>
              <p class="hey">${slicedDescription}</p>
            </div>
          </div>
        </div>
      </div>`;

  }
  document.getElementById('categoryCard').innerHTML = cartona;
  $("#categoryCard .col-md-3").click(async function (e) {
    let clickedElement = e.target;
    var categorii = $(this).find("h3").text();
    catDetails(categorii)
    console.log(categorii);
  });
}
getCat();



async function catDetails(rec) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${rec}`);
  let meal = await getApi.json();
  let data = meal.meals;
  let cartona = ``;
  

  for (let i = 0; i < data.length; i++) {

    cartona += ` <div data-id="${data[i].idMeal}"  class="col-md-3 gy-4 boxy">
      <div class="card position-relative ">
        <img src="${data[i].strMealThumb}" class="w-100">
        <div class="layer rounded-3 position-absolute d-flex align-items-center ">
          <h3 class=" text-dark p-3">${data[i].strMeal}</h3>
        </div>
      </div>
      </div>`
  }

  document.getElementById('categoryDetails').innerHTML = cartona;
  $('#Category').addClass('d-none');
  $('#catDetails').removeClass('d-none');
  $('#details').removeClass('d-none');
 
  $("#catDetails .col-md-3").click(async function (e) {
    var Mealid = $(this).data("id");
    console.log(Mealid);
    getThem(Mealid)
  });

}











// Area

async function getArea() {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let area = await getApi.json();
  let data = await area.meals;

  let cartona = ``;
  for (let i = 0; i < 25; i++) {
    cartona += `<div class="col-md-3 gy-4">
  <div class="get text-white text-center">
    <i class="fa-solid fa-house-laptop fa-4x"></i>
    <h3>${data[i].strArea}</h3>
    </div>
  </div>`
    // console.log(data[i].strArea)
  }
  document.getElementById('homeArea').innerHTML = cartona;
  $("#homeArea .col-md-3").click(async function (e) {
    let clickedElement = e.target;
    var areaName = $(this).find("h3").text();
    areaDetails(areaName)
    // console.log(areaName);
  });
}
getArea()


async function areaDetails(ar) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ar}`);
  let area = await getApi.json();
  let data = await area.meals;
  console.log(data)
  let cartona = ``;
  for (let i = 0; i < data.length; i++) {
    cartona += ` <div data-id="${data[i].idMeal}"  class="col-md-3 gy-4">
<div class="card position-relative ">
  <img src="${data[i].strMealThumb}">
  <div class="layer rounded-3 position-absolute d-flex align-items-center ">
    <h3 class=" text-dark p-3">${data[i].strMeal}</h3>
  </div>
</div>
</div>`

  }
  document.getElementById('areaDetails').innerHTML = cartona;
  $('#Area').addClass('d-none');
  $('#arDetail').removeClass('d-none');
  $('#details').removeClass('d-none');
 
  $("#arDetail .col-md-3").click(async function (e) {
    var Mealid = $(this).data("id");
    ;
    getThem(Mealid)
  });
 



}



// ingrediants

async function getIngrediant() {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let ingrediant = await getApi.json();
  let data = ingrediant.meals;

  let cartona = '';
  for (let i = 0; i < 20; i++) {
    let slicedDescription = data[0].strDescription.slice(0, 100);
    cartona += `
      <div class="col-md-3 gy-3">
          <div class="get text-white text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${data[i].strIngredient}</h3>
            <p>${slicedDescription}</p>
          </div>
        </div>

      `
  }
  document.getElementById('getIng').innerHTML = cartona;

  $("#getIng .col-md-3").click(async function (e) {
    let clickedElement = e.target;
    var getintgre = $(this).find("h3").text();
    ingrediantDetails(getintgre)
    console.log(getintgre);
  });
}
getIngrediant()


async function ingrediantDetails(dish) {
  let getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dish}`);
  let ingrediant = await getApi.json();
  let data = ingrediant.meals;
  // console.log('yess', data)
  let cartona = ``;
  for (let i = 0; i < data.length; i++) {
    cartona += ` <div data-id="${data[i].idMeal}" class="col-md-3 gy-4">
    <div class="card position-relative ">
      <img src="${data[i].strMealThumb}">
      <div class="layer rounded-3 position-absolute d-flex align-items-center ">
        <h3 class=" text-dark p-3">${data[i].strMeal}</h3>
      </div>
    </div>
    </div>
    `
  }
  document.getElementById('ingDetails').innerHTML = cartona
  $('#Ingredients').addClass('d-none');
  $('#ingrediantDetails').removeClass('d-none');
  $('#details').removeClass('d-none');
  $("#ingDetails .col-md-3").click(async function (e) {
    var Mealid = $(this).data("id");
    $('#Ingredients').addClass('d-none');
  $('#ingrediantDetails').removeClass('d-none')
  $('#Area').addClass('d-none')
 
    console.log(Mealid);
    getThem(Mealid)
  });
}












// contact

const inputs = $('#Contact input');

const passwordInput = $('#Contact input').eq(4);
const repasswordInput = $('#Contact input').eq(5);
const submitBtn = $('#Contact button');


const nameRegex = /^.{3,}$/;
const emailRegex = /^.+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
const phoneRegex = /^(\+2)*01(1|0|2|5){1}[0-9]{8}$/;
const ageRegex = /^[1-9]{1}[0-9]{0,1}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/;

const regexMap = {
  'name': nameRegex,
  'email': emailRegex,
  'phone': phoneRegex,
  'age': ageRegex,
  'password': passwordRegex,
}

function validHandler(elem) {
  elem.removeClass('non-valid');
  elem.addClass('valid');
  elem.next().slideUp()
  elem.parent().children('i').eq(1).fadeOut()
  elem.parent().children('i').eq(0).fadeIn()
}

function nonValidHandler(elem) {
  elem.removeClass('valid');
  elem.addClass('non-valid');
  elem.next().slideDown()
  elem.parent().children('i').eq(0).fadeOut()
  elem.parent().children('i').eq(1).fadeIn()
}


inputs.on('input', (elem) => {
  const input = $(elem.target);

  if (input.attr('name') === 'repassword' || input.attr('name') === 'password') {
    if (passwordInput.val() === repasswordInput.val()) { console.log('in 1'); validHandler(repasswordInput); }
    else { console.log('in 2'); nonValidHandler(repasswordInput); }
    if (input.attr('name') === 'repassword') { return; }
  }

  if (regexMap[input.attr('name')].test(elem.target.value)) { validHandler(input); }
  else { nonValidHandler(input); }

});

submitBtn.on('click', function () {

  const checks = $('.fa-check');

  for (let i = 0; i < checks.length; i++) {
    if (checks.eq(i).css('display') === 'none') { return; }
  }

  $('#Contact form').html('<div class="text-center pt-5 justify-content-center d-flex"><div class="loader mt-5"></div></div>');
  setTimeout(() => {
    $('#Contact form').html('<div class="text-center pt-5 "><h2 class="fs-1 text-success mt-5">Submit Successfully</h2></div>');
  }, 1000);

});

////////////////////// SEARCH FUNCTIONALITIES ///////////////////////////////



////////////////////// ************************* ///////////////////////////////
