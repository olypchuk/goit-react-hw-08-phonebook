export const isLoggedIn = ({auth})=> auth.isLogin
   
export const getUser = ({ auth }) => {

    return auth?.user
}
export const isLoading=({auth})=>auth.isLoading