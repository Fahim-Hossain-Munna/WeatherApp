<template>
    <div id="bg">
        <div id="overlay"></div>
        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center mb-5">
                    <div class="col-md-10 col-lg-8 col-xl-6">
                        <!-- input start from here -->
                        <div class="input-group rounded d-flex justify-content-end">
                        <form class="d-flex">
                        <input type="search" class="form-control rounded" placeholder="Search city name" v-model="searchBox" v-on:click="weather = ''"/>
                        <button type="submit" class="input-group-text border-0 bg-transparent text-white" v-on:click="inputSearch">
                            <i class="material-symbols-outlined">
                            search
                            </i>
                        </button>
                        </form>
                        </div>
                        <!-- input end from here -->
                    </div>
                </div>

                    <div class="input-group rounded d-flex justify-content-center mb-3">
                        <button type="submit" class="input-group-text border-0 bg-transparent text-white" v-on:click="inputLocation">
                            <i class="material-symbols-outlined">
                            add_location_alt
                            </i>
                                Current Location
                        </button>
                    </div>

                <div v-if="weather" class="row d-flex justify-content-center align-items-center ">
                <div class="col-sm-6 col-md-10 col-lg-8 col-xl-6">
                    <div class="card text-white p-2" style="border-radius: 40px;">
                    <div v-if="weather.weather[0].main == 'Clouds'" class="bg-image" >
                        <img src="../assets/cloud.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Clear'" class="bg-image" >
                        <img src="../assets/sunny.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Haze' || weather.weather[0].main == 'Fog'" class="bg-image" >
                        <img src="../assets/haze.webp"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Snow'" class="bg-image" >
                        <img src="../assets/snow.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Rain'" class="bg-image" >
                        <img src="../assets/rain.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Thunderstorm'" class="bg-image">
                        <img src="../assets/thunderstorm.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Mist' || weather.weather[0].main == 'Smoke' || weather.weather[0].main == 'Dust'" class="bg-image" >
                        <img src="../assets/mist.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div class="card-img-overlay text-white p-5">
                        <p>{{ new Date().toLocaleString() }}</p>
                        <h3 class="mb-0 mt-2">{{ weather.name .toUpperCase() }}, {{ weather.sys.country }}</h3>
                        <img v-bind:src="'https://openweathermap.org/img/wn/'+icon+'.png'">
                        <p class="display-2 my-3">{{ Math.round(weather.main.temp) }}°C</p>
                        <p class="mb-2">Feels Like: <strong>{{ weather.main.feels_like }}°C</strong></p>
                        <h4>{{ weather.weather[0].main }}</h4>
                        <h5>{{ weather.weather[0].description }}</h5>
                    </div>
                    </div>

                </div>
                </div>

                <!-- default section -->
                
                <div v-else class="row d-flex justify-content-center align-items-center">
                <div class="col-sm-6 col-md-10 col-lg-8 col-xl-6">
                    <div class="card text-white p-2" style="border-radius: 40px;">
                    <div class="bg-image">
                        <img src="../assets/weather.jpg"
                        class="card-img" alt="weather" style="border-radius: 40px;"/>
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5); border-radius: 40px;"></div>
                    </div>
                    <div class="card-img-overlay text-white p-5">
                        <p>{{ new Date().toLocaleString() }}</p>
                        <h3 class="mb-0 mt-2">Creative IT, BD</h3>
                        <img src="https://openweathermap.org/img/wn/10d.png">
                        <p class="display-2 my-3">5°C</p>
                        <p class="mb-2">Feels Like: <strong>4.55°C</strong></p>
                        <h4>Warm</h4>
                        <h5>Feel Cool</h5>
                    </div>
                    </div>

                </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import '../assets/css/weather.css'

export default {
    name: 'Weather',
    data(){
        return{
            weather : null,
            searchBox : "",
            icon : "",
            api : '443faed920ea4b762f79312eee78a344'
        }
    },
    methods:{
        async inputSearch(e){
            e.preventDefault();
           let getWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.searchBox}&appid=${this.api}`)
           this.weather = getWeatherData.data
           this.icon = this.weather.weather[0].icon;
           console.log(this.icon);
        },
        async inputLocation(){
           navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude
            let long = position.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${this.api}`).then((res)=>{
                this.weather = res.data
                this.icon = this.weather.weather[0].icon
            })
            
           })
        }

        }
    }

</script>


<style scoped>
#bg{
    position: relative;
    background: url('../assets/background.jpg') no-repeat center;
    background-size: cover;
}
#overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
}


</style>