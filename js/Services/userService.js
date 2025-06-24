export const getUserById = async(id) => {
    try{
      const response = await fetch(`https://taskplannerprobackend.onrender.com/api/users/${id}`);
    const data = await response.json();
    return data;
    }catch(err){
      console.log(err);
    }
}

export const login = async(identifier, password, errorMessageDisplay) => {
    try{
      const response = await fetch('https://taskplannerprobackend.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password }),
      })
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Usuario o contraseña incorrectos');
      }
      document.cookie = `token=${data}`;
      console.log('token guardado');  
      const userData = await getUserByUsernameOrEmail(identifier);
      errorMessageDisplay('none');
      localStorage.setItem('user', JSON.stringify(userData));
      window.location.href = './index.html';
    }catch(err){
      errorMessageDisplay('block')
      
    }
}
export const logout = async() => {
  try{
    const response = await fetch('https://taskplannerprobackend.onrender.com/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Usuario o contraseña incorrectos');
    }
    document.cookie = `token=`;
    console.log('token guardado');  
    localStorage.clear();
    window.location.href = '/login.html';
  }catch(err){
    console.log(err);
    
  }
}
export const getUserByUsernameOrEmail = async(identifier) => {
  try{
    const response = await fetch(`https://taskplannerprobackend.onrender.com/api/users/login/${identifier}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data
  }catch(err){
    console.log(err);
  }
  
}
export const authenticateUser = async() => {
  try {
    const cookies = document.cookie.split(';');
    const token = cookies.find(c => c.includes('token')).split('=')[1]; 
    const res = await fetch('https://taskplannerprobackend.onrender.com/api/users/auth', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(res);
    if (!res.ok) throw new Error('No autorizado');

  } catch(err) {
    window.location.href = '/login.html';
    console.log(err)
  }
}
export const createUser = async(username, password, email, toggleDisplayForm, errormessage) => {
  try{
    const response = await fetch(`https://taskplannerprobackend.onrender.com/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email, role:'user' })
    })
    const data = await response.json();
    if(!response.ok){
      const error = document.createTextNode(data.errors[0].msg);
      errormessage.append(error);
      console.log(errormessage)
      console.log(data.errors[0].msg)
      throw new Error('Error en el registro');
    }
    errormessage.remove();
    toggleDisplayForm('block', 'none');
    alert('Registro completado con exito!')
    return data
  }catch(err){
    console.log(err);
  }
}
