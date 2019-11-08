(()=>{
    let thumbnails = document.querySelectorAll(".plantPictures");
    
    function parseData(plant){
        let bio = document.querySelector('.bio')
        bio.classList.add('bio_display')
        bio.innerHTML = `<h3>${plant.Name}</h3>`;
        bio.innerHTML += `<h4>${plant.Growing_type}</h4>`;
    }
    
    function gettingData(e){
        e.preventDefault();
        console.log("clicked");
        let url = `/users/${this.getAttribute('href')}`
        console.log(url)
    
        fetch(url)
        .then(res => {
            
          return  res.json()
            
        })
        .then(data => {
           console.log(data)
           parseData(data)})
        
    
    }
    
    thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',gettingData))
    
    
    })();