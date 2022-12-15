/* key = 51c394ee833a791fa73f2d24d633afc7
   url = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang=pt_br&units=metric*/
key = '51c394ee833a791fa73f2d24d633afc7'
api = 'https://api.openweathermap.org/data/2.5/weather?'

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        chamar_api(position.coords.latitude, position.coords.longitude)
        
    })
}

function chamar_api(lat, long){
    fetch(`${api}lat=${lat}&lon=${long}&appid=${key}&lang=pt_br&units=metric`)
    .then(Response => {
        alert('aaaa')
        if (!Response.ok){
            throw new Error(`http error: status ${Response.status}`)
            
        }
        return Response.json()
    })
    .catch(error => {
        
        alert(error.message)
    })
    .then(Response => {
        
        resultado(Response)
    })
}

function resultado(weather){
    document.getElementById('cidade').innerText = `${weather.name}, ${weather.sys.country}`
    temp = Math.round(weather.main.temp)
    document.getElementById('temperatura').innerText = `${temp}º C`
    alert(weather.weather[0].icon)
}

