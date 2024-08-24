const apikey = "f54ec3feb89716c98afdf2cee8ccbef8";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".btn button");


        async function checkweather(city) {
            try {
                const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            } catch (error) {
                console.error(error);
                alert("City not found or an error occurred. Please try again.");
            }
        }

        searchbtn.addEventListener("click", () => {
            const city = searchbox.value;
            if (city) {
                checkweather(city);
            } else {
                alert("Please enter a city name.");
            }
        });