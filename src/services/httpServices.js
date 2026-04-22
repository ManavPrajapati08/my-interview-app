const BASE_URL='https://dummyjson.com';

export const httpService={
    post: async(url,data)=>{
        const response=await fetch(`${BASE_URL}/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },body:JSON.stringify(data)
        })

        const result =await response.json();
        if(!response.ok){
            throw new Error(result.message||'Something went wrong')
        }
        return result;
    },

    get: async(url)=>{
        const response=await fetch(`${BASE_URL}/${url}`);
        const result =await response.json();
        if(!response.ok){
            throw new Error(result.message||'Something went wrong')
        }
        return result;
    },

    put: async(url,data)=>{
        const response=await fetch(`${BASE_URL}/${url}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },body:JSON.stringify(data)
        });
        const result =await response.json();
        if(!response.ok){
            throw new Error(result.message||'Something went wrong')
        }
        return result;
    },

    delete: async(url)=>{
        const response=await fetch(`${BASE_URL}/${url}`,{
            method:'DELETE',
        });
        const result =await response.json();
        if(!response.ok){
            throw new Error(result.message||'Something went wrong')
        }
        return result;
    }
}