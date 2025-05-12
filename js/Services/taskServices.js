export const getAllUserTasks = async() => {
    try{
        const cookies = document.cookie.split(';');
        const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch('https://taskplannerprobackend.onrender.com/api/task', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
        });
        const data = await response.json()
        return data
    }catch(err){
    console.error('Error al obtener las tareas:', err);
    }
}
export const updateTask = async(id, newData) => {
    try{
        const cookies = document.cookie.split(';');
        const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch(`https://taskplannerprobackend.onrender.com/api/task/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newData)
        });
        const data = await response.json()
        return data
    }catch(err){
    console.error('Error al modificar tareas:', err);
    }
}
export const deleteTask = async(id) => {
    try{
        const cookies = document.cookie.split(';');
        const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch(`https://taskplannerprobackend.onrender.com/api/task/${id}`, {
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
export const createTask = async(title, description, status, date) => {
try{
    const userInput = JSON.stringify({title, description, status, date})
    const cookies = document.cookie.split(';');
    const token = cookies.find(c => c.includes('token')).split('=')[1]; 
        const response = await fetch('https://taskplannerprobackend.onrender.com/api/task', {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: userInput
        });
        const data = await response.json()
        return data
}catch(err){
    console.log(err);
}
}
export const getTaskById = async(id)=> {

}