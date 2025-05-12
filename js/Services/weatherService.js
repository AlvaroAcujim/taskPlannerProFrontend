export const openMeteoApiAndUserGeolocation = (generateWeatherCarts, createErrorMessage, lat, lon) => {
  console.log('accediendo a la ubicacion')  
  navigator.geolocation.getCurrentPosition(
        async (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat, lon)
        try{
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`);
            const data = await response.json();
            generateWeatherCarts(data);
        }catch(err){
            console.log(err);
            createErrorMessage('Ha ocurrido un error');
        }
      }, 
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          createErrorMessage('Has denegado el acceso a la ubicación. No se puede obtener el clima. La sección tiempo requiere de este permiso');
        } else {
          alert("Error al obtener la ubicación: " + error.message);
        }
        console.error("Geolocation error:", error);
      });
};