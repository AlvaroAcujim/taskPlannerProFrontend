export const postTask = (task, idTable, token) => {
    try{
        task.forEach(async(el) => {
            const response = await fetch(`https://api.baserow.io/api/database/rows/table/${idTable}/`, {
                method: "POST",
                headers: {
                  "Authorization": `Token ${token}`,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "field_4009866": el.desc,
                    "field_4046535": el.title,
                    "field_4009868": el.status,
                    "field_4009867": el.date,
                    "field_4046536": el.creationDate
                })
              });
            const result = await response.json();
            console.log(result);
        })
        
    }catch ( error ){
        return error;
    }  
};

export const removeAllTaskFromBaserow = async(idTable, token) => {
    try{
    const getRes = await fetch(`https://api.baserow.io/api/database/rows/table/${idTable}/?user_field_names=true`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    });
    const existing = await getRes.json();
    for (const el of existing.results) {
      await fetch(`https://api.baserow.io/api/database/rows/table/${idTable}/${el.id}/`, {
        method: "DELETE",
        headers: {
          "Authorization": `Token ${token}`
        }
      });
      console.log(`Fila con id ${el.id} eliminada`);
    }
    }catch(error){
        console.log(error);
    }
};