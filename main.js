class DigitalClock {
  constructor(element) {
    this.element = element
  }

  start() {
    this.update()

    setInterval(() => {
      this.update()
    }, 500)
  }

  update() {
    const parts = this.getTimeParts()
    const minuteFormatted = parts.minute.toString().padStart(2, '0')
    const timeFormatted = `${parts.hour}:${minuteFormatted}`
    const amPm = parts.isAm ? 'AM' : 'PM'

    this.element.querySelector('.clockTime').textContent = timeFormatted
    this.element.querySelector('.clockAmPm').textContent = amPm
  }

  getTimeParts() {
    const now = new Date()

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12
    }
  }
}

const clockElement = document.querySelector('.clock')
const clockObject = new DigitalClock(clockElement)

clockObject.start()

// COTATION /////////////////
function cotationSLP() {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=brl'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('cotationSLP').innerHTML =
        'SLP: ' + data['smooth-love-potion']['brl']
    })
}
cotationSLP()

function cotationUSD() {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=binance-usd&vs_currencies=brl'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('cotationUSD').innerHTML =
        'Dólar: ' + data['binance-usd']['brl']
    })
}
cotationUSD()

function cotationCardano() {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=brl'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('cotationCardano').innerHTML =
        'Cardano: ' + data['cardano']['brl']
    })
}
cotationCardano()

// BACKGROUND\\
function background() {
  const url =
    'https://api.nasa.gov/planetary/apod?api_key=qsghnMUvpZPggaWADSFAIjqtfkgd8bLzz9dddXDm'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let el = document.getElementById('html')
      el.style.background = `url(${data.url}) no-repeat center/cover`
    })
}
background()

function sleep(seconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < seconds);
}

function openNav() {
  document.getElementById('mySidebar').style.width = '150px';
  setTimeout(() => {  
    document.getElementById('ul').style.width = "0px";
    document.getElementById('ul').style.height = "0px";
    document.getElementById('ul').style.padding = "0px";
    document.getElementById('cotationCardano').innerHTML = "";
    document.getElementById('cotationSLP').innerHTML = "";
    document.getElementById('cotationUSD').innerHTML = "";
     }, 150);
}

function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  setTimeout(() => {  
    document.getElementById('ul').style.width = "max-content";
    document.getElementById('ul').style.height = "max-content";
    document.getElementById('ul').style.padding = "10px";
    cotationCardano()
    cotationSLP()
    cotationUSD()
    ; }, 150);
}
