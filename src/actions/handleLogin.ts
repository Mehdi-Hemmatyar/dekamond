'use server'



export const loginUser = async(data : FormData)=>{
    console.log('fetching user data...' + data);
    
    try {
        const res = await fetch('https://randomuser.me/api/?results=1&nat=us' , {
            method : 'GET'
        })
        if(res.ok){
            const result = await res.json()
            return result
        }

        throw new Error('something went wrong')

    } catch (error) {
        throw new Error('something went wrong')
    }
}