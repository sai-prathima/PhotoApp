import axios from "axios"

export const getApi=async(id)=>{
    try{
        const photos=await axios.get(`https://jsonplaceholder.typicode.com/photos/`+`${id}`)
        return photos.data
    }catch(error){
        console.log(error)
    }
}

//TODO put all folders and files into src