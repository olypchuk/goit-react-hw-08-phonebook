import axios from "axios";

export const instance = axios.create({
    baseURL:'https://connections-api.herokuapp.com'
})

export const operationWithToken = (token) => {
    if (token) {
       return  instance.defaults.headers.common.authorization=`Bearer ${token}`
    }
    instance.defaults.headers.common.authorization=''
}
export const signUp = async (data) => {
    const res = await instance.post('/users/signup', data)
    operationWithToken(res.data.token)
    return res.data
} 
export const login = async (data) => {
    const res = await instance.post('/users/login', data)
    operationWithToken(res.data.token)
    return res.data
} 
export const logOut = async () => {
    const res = await instance.post('/users/logout')
    ///обнулить токен
    operationWithToken()
    return res.data
}
export const current = async (token) => {
    try {
        operationWithToken(token)
        const res = await instance.get('/users/current') 
    
        // вставити токен
        return res.data
    } catch (error) {
         operationWithToken()
        ///обнулить токен
        console.log('error :>> ', error);
    }
   
 
}
