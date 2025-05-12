export const getAllEvents = async() => {
    const response = await fetch('https://taskplannerprobackend.onrender.com/api/event');
    const data = await response.json();
    return data;
}
export const createEvent = async(title, description, date) => {
try{
    const userInput = JSON.stringify({title, description, date})
    const cookies = document.cookie.split(';');
    const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch('https://taskplannerprobackend.onrender.com/api/event', {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: userInput
        });
        if(!response.ok) throw new Error('Error al crear el evento')
        const data = await response.json();
        alert('Evento creado con exito')
        return data
}catch(err){
    console.log(err);
}
}
export const removeEvent = async(id, title, date) => {
    try{
       
        const cookies = document.cookie.split(';');
        const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch(`https://taskplannerprobackend.onrender.com/api/event/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
        });
        const data = await response.json()
        return data
    }catch(err){
    console.error('Error al modificar tareas:', err);
    }
}
export const updateEvent = async(id, title, date, description) => {
    try{
        const userInput = JSON.stringify({title, date, description})
        const cookies = document.cookie.split(';');
        const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch(`https://taskplannerprobackend.onrender.com/api/event/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: userInput
        });
        const data = await response.json()
        return data
    }catch(err){
    console.error('Error al modificar tareas:', err);
    }
}