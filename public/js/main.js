const myVM = (() => {
  // get the user buttons and fire off an async DB query with Fetch
  let userButtons = document.querySelectorAll( ' .c-link'),
  lightbox = document.querySelector('.lightbox');





  function parseCountryData(country) {

    let targetDiv = document.querySelector(' .lb-content');
  

     let countryDescription = `
     <h3 class="number">${country.ID}</h3>
  <h4 class="country-desc"> <span>${country.description}<span></h4>
  <p class="desc-js">${country.country}</p>
  <img class="cover-cover" src="images/${country.cover}">
  
 `;
    
  

  console.log(countryDescription);
  targetDiv.innerHTML = countryDescription;
  lightbox.classList.add('show-lb');
  

  }


  // function parseCountryData(country) {// person in the database is a result//model, lightbox, loading animation, css, js magic
  //     let targetDiv = document.querySelector(' .lb-content'),
  //         targetImg = lightbox.querySelector('.imgs');


  //     let CountryDescription = `
  //     <p class="desc-js">${country.description}</p>
  //     <h4 class="quote-js"> Book quote:</h4>
  //   `;

  //     // console.log(CountryDescription);
  //     // targetDiv.innerHTML = CountryDescription;
  //     targetImg.src = country.imgsrc;

  //     lightbox.classList.add('show-lb');


  // }

  function getCountryData(event) {
      event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
      //debugger;

      // find the image closet to the anchor tag and get its src property

      let imgSrc = this.previousElementSibling.getAttribute('src');
       let users = `/users/${this.getAttribute('href')}`;//  /3 route in express. passing data dynamically

      fetch(users)// go get the data fetch boy!
        .then(res => res.json())// parse the json result into a plain object
        .then(data => {
            console.log("my data resutl is: ", data);

            data[0].imgsrc = imgSrc;


            parseCountryData(data[0]);
        })
        .catch((err) => {
            console.log(err)
        });
  }

  userButtons.forEach(button => button.addEventListener('click', getCountryData));
  lightbox.querySelector(' .close').addEventListener('click',  function() {
      lightbox.classList.remove('show-lb');
  });

})();