export const isLoggedIn = ({auth})=> auth.isLogin
   
export const getUser = ({ auth }) => {

    return auth.user
    // return auth.user.user
}
