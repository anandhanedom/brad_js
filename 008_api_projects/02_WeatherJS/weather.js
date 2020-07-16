class Weather {
  constructor(city) {
    this.apiKey = 'e9586cd72a20dc39d1dd842cbed99d46';
    this.city = city;
  }

  //Fetch weather from API
  async getWeather() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const resData = res.json();

    return resData;
  }

  //Change location
  changeLocation(city) {
    this.city = city;
  }
}
