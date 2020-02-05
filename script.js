    //selecting the DOM
    var breaking = document.querySelector(".Breaking-News");
   

var api = "https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-05&sortBy=publishedAt&apiKey=0f3a910a5b884d168a49b92f427347f6";
           
var req = new Request(api);
fetch(req)
.then 





             /*
        fetch(api)
        //keyword 'response' could be replaced with any word, response is converted to json as shown below
        .then(response => {
            return response.json();

        })
        .then(response =>{
            // this can also be written as temperatureDegree.textContent =response.currently.temperature; (then the function can be discarded)
            //temperatureDescription.textContent =response.currently.summary; etc
            const {name} = response.source;

           console.log(response);
            
            // we pull out the data for temperature, summary and timezone
             //setting DOM elements that has been assigned a variable from line 6-8
             //exact object properties can be checked on the console

             breaking = name;
            
        });
            
            */