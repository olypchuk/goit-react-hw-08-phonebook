import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
import { lazy,Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";

const RegistrationPage = lazy(() => import('../../pages/registration/Registration'))
const LoginPage = lazy(() => import('../../pages/login/Login'))
const ContactsPage = lazy(() => import('../../pages/contacts/ContactsPage'))

const ContactsRoutes = () => {

    return (
        <>
        <Suspense fallback={<p>....Load page</p>}>

            <Routes>
              <Route path='/' element={<SharedLayout/>} >
            <Route element={<PublicRoute/>}>

            <Route path='register' element={<RegistrationPage />} />
            <Route path='login' element={<LoginPage />} />  
            </Route>
            <Route element={<PrivateRoute/>}>
                   <Route path='contacts' element={<ContactsPage />} />   
                    </Route>
                 <Route path='*' element={<Navigate to="/"/>}/>
          </Route>
         </Routes >
            </Suspense><Outlet />
        </>
            )
}
export default ContactsRoutes