                
         
         
         
         
          //store API url in a global  varaible
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

    async function getISS() {
      const response = await fetch (api_url);
      //data from fetch comes as a stream and can be changed to format of choice
      // The response can be converted to json as shown below(line 7 only)
      const data = await response.json();
      //name, longitiude & latitude can be replaced by any other property present in the object
      console.log(data);
       
        const {name, longitude, latitude} = data;
        
        
       document.getElementById("name").textContent = name;
      document.getElementById("lat").textContent = latitude.toFixed(2); //toFixed() adds to 2decimal places
      document.getElementById("long").textContent = longitude.toFixed(2);

    }
    getISS();

    //To ensure the data is refreshed with an interval and sent to the app
    setInterval (getISS, 1000);
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       /*
                
                //store API url in a global  varaible
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

    async function getISS() {
      const response = await fetch (api_url);
      //data from fetch comes as a stream and can be changed to format of choice
      // The response can be converted to json as shown below(line 7 only)
      const data = await response.json();
      //longitiude & latitude can be replaced by any other property present in the object
      const {latitude, longitude} = data;

      document.getElementById("lat").textContent = latitude;
      document.getElementById("long").textContent = longitude;

     

    }
    getISS();

*/
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   /* 
    //selecting the DOM
    
    let breaking = document.querySelector(".Breaking-News");
    let breaking1 = document.querySelector(".newsupdate");
  
 
var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0f3a910a5b884d168a49b92f427347f6";
           
var req = new Request(url);
fetch(req)
.then(function(response){
    return response.json()
}) .then(function(jsonResponse){
  console.log(jsonResponse)

  breaking.textContent = jsonResponse.author;
 
});



 console.log(latitude);
      console.log(longitude);
*/

 


        