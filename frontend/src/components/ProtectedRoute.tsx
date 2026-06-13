import { Navigate } from "react-router-dom";

function ProtectedRoute(

{children}:any

){

const admin=

localStorage.getItem(

"isAdmin"

);


return admin ?

children

:

<Navigate to="/login"/>;

}

export default ProtectedRoute;