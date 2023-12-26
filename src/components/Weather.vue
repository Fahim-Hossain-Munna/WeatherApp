<template>
    <div>
        <section class="vh-100" style="background: #45474B;">
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
                <div v-if="weather" class="row d-flex justify-content-center align-items-center">
                <div class="col-sm-6 col-md-10 col-lg-8 col-xl-6">
                    <div class="card bg-dark text-white" style="border-radius: 40px;">
                    <div v-if="weather.weather[0].main == 'Clouds'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/cloud.jpg"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Clear'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/sunny.jpg"
                        class="card-img" alt="weather" st />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Haze' || weather.weather[0].main == 'Fog'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/haze.webp"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Snow'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/snow.jpg"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Rain'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/rain.jpg"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Thunderstorm'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/thunderstorm.jpg"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div v-if="weather.weather[0].main == 'Mist' || weather.weather[0].main == 'Smoke' || weather.weather[0].main == 'Dust'" class="bg-image" style="border-radius: 35px;">
                        <img src="../assets/mist.jpg"
                        class="card-img" alt="weather" />
                        <div class="mask" style="background-color: rgba(33, 7, 5, .5);"></div>
                    </div>
                    <div class="card-img-overlay text-white p-5">
                        <p>{{ new Date().toLocaleString() }}</p>
                        <h3 class="mb-0 mt-2">{{ searchBox.toUpperCase() }}, {{ weather.sys.country }}</h3>
                        <img v-bind:src="'https://openweathermap.org/img/wn/'+icon+'.png'">
                        <p class="display-2 my-3">{{ Math.round(weather.main.temp) }}°C</p>
                        <p class="mb-2">Feels Like: <strong>{{ weather.main.feels_like }}°C</strong></p>
                        <h4>{{ weather.weather[0].main }}</h4>
                        <h5>{{ weather.weather[0].description }}</h5>
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
        }
    }

}
</script>
