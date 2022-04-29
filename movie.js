var container = document.getElementById("container");
  function fetchApi() {
    
    let title = document.getElementById("title").value;
    
    var arr = [];
    async function getUser() {
      let url = `http://www.omdbapi.com/?apikey=55a53429&t=${title}`;
      try {
        let res = await fetch(url);
        let data = await res.json();

        arr.push(data);
       
        appendMovie(arr);
        console.log("user:", arr);
      } catch (err) {
        console.log("This error came from try & catch:", err);
      }
    }
    getUser();
    
  
// Append movies data---------------------------------------------------->    
    function appendMovie(movie) {
        container.innerHTML="";    //----------->for 1 time one movie information
      movie.forEach(function (element) {
        
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.Poster);

        let title = document.createElement("h1");
        title.innerText = `Title - ${element.Title}`;

        let Year = document.createElement("h2");
        Year.innerText = `Year - ${element.Year}`;

        let actor = document.createElement("h3");
        actor.innerText = `Cast - ${element.Actors}`;

        let Director = document.createElement("h5");
        Director.innerText = `Director - ${element.Director}`;

        let rating = document.createElement("h5");
        rating.innerText = `Rating - ${element.Ratings[0].Value}`;


        if(element.Title===undefined){
          container.innerHTML=""; 
            let not = document.createElement("img");
        not.setAttribute("src", "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg");
        
        container.appendChild(not);
        }
        else{
          if(+element.Rating>7){
            rating.innerHTML=`Rating: ${a.rating} RECOMMENDED`
          }
        div.append(img, title, Year, actor, Director,rating);
        

        container.appendChild(div);
    }
      });
    }
  }