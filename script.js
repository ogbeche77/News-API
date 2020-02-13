      //store API url in a global  varaible
      const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

      async function getISS() {
        const response = await fetch (api_url);
        //data from fetch comes as a stream and can be changed to format of choice e.g text, blob, json
        // the data can be converted to json as shown below(see line 12)
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