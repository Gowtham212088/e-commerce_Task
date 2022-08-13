import React from "react";
import { useHistory } from "react-router-dom";


function AdminDashboard (){

const history = useHistory()

    return(
        <div>
       <button  > User </button>
       <button >products </button>
       <button > vendor </button>

        </div>
    )
}

export default AdminDashboard;