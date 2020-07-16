class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
  }
  paint(weather_input) {
    this.location.textContent = weather_input.name;
    this.desc.textContent = weather_input.weather[0].description;
    this.string.firstElementChild.textContent = `${(
      weather_input.main.temp - 273
    ).toFixed(1)}`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather_input.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity:${weather_input.main.humidity}`;
    this.feelsLike.textContent = `Feels Like:${(
      weather_input.main.feels_like - 273
    ).toFixed(1)}`;
    this.wind.textContent = `Wind:${weather_input.wind.speed}`;
    this.visibility.textContent = `Visibility:${weather_input.visibility}`;
  }
}
