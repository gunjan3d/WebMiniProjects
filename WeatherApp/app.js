const Express = require("express");
const https = require("https");
const BodyParser = require("body-parser");
const bodyParser = require("body-parser");

const app = Express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {

    res.sendFile( __dirname +"/index.html");
});

app.post("/",function (req ,res) {
    // console.log(req.body.city);

    const city = req.body.cityname;
    // const city = "Nagpur";
    const apikey = "5c368e28f682ce381208e5ce750ecf3a";
    const Units = "metric";
    const url2 = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + apikey + "&units="+Units;

    https.get(url2, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const WeatherData = JSON.parse(data);
            const temp = WeatherData.main.temp;
            const WeatherDiscription = WeatherData.weather[0].description;
            const Visibility = WeatherData.visibility;
            const WindSpeed = WeatherData.wind.speed;
            const WindDegree = WeatherData.wind.deg;
            //console.log(WeatherData);
            console.log(temp);
            console.log(WeatherDiscription);
            console.log(Visibility);
            console.log(WindSpeed);
            console.log(WindDegree);
            // res.send("the temperature in " + city +" is " + temp + "<br>the weather des is " + WeatherDiscription);
            res.sendFile(__dirname + "/Ans.html");


        })
    });
})

app.listen(3000, function () {
    console.log("App Started on port 3000 ");
});
