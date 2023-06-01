import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const location = useLocation();

    if(user){
        return children;
    }
    
    return <Navigate state={{from:location}} to='/login/signin' ></Navigate>
    


};

export default PrivateRoute;