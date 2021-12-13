

    $(document).ready(function(){
        
        $('#btnSearch').click(function(){
            
            var inputValue = $("#inputValue")
            var City = $("#city")
            var temp = $("#Celcius")
            var status = $("#status")

            if (!inputValue.val() || inputValue.val().trim().length === 0)
            {
                alert("Please input a city")
            } else { 

        
                fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.val()+'&appid=5f1f4fb2cb26ec6443130146cb91c9c0')
                .then(res => res.json())
                .then(myData => {

                    var CityValue =  myData.name
                    var CountryValue = myData.sys.country
                    var StatusValue =  myData.weather[0].description
                    var tempValue = myData.main.temp
                  
                    City.text(CityValue+', '+ CountryValue)
                    temp.text(tempValue)
                    status.text(StatusValue)
                    
                })
                .catch( err => {
                    if (err){
                        alert("Sorry, city not found. Please enter a correct city.")
                    }
                })
            }
        })
    })