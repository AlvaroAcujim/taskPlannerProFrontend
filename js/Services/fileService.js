export const uploadImage = async(id, file) => {
    try{
        if (file.length === 0) return;
        const formData = new FormData();
        formData.append('file', file)
       const response = await fetch(`https://taskplannerprobackend.onrender.com/api/file/upload/user/${id}`, {
        method: 'POST',
        body: formData
       });
       const data = await response.json();
       console.log(data);
       if(!response.ok){
        alert('error al cambiar imagen')
        throw new Error('Error al cambiar imagen')
       }
       alert('imagen modificada con exito!')
       return data;
    }catch(err){
        console.log(err);
    }
}