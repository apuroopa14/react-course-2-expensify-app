//Higher order component- A component(HOC)  that renders another component 

import React from 'react';
import ReactDOM from 'react-dom';

//normal component***********************************************************************************

const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

//hoc component******************************************************************************************

//withAdminWarning
const withAdminWarning=(WrappedComponent)=>{
return(props)=>(
    <div>
    {props.isAdmin && <p>This is a private Info.Dont share it.    </p>}

    <WrappedComponent {...props} />
    </div>

);
};

//requireAuthentication

const requireAuthentication=(WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuthenticated ? ( <WrappedComponent {...props} />):(<p>Please log in to view</p>) }
    
        
        </div>
    
    );
    };




//calling HOC********************************************************************************************
const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);



//rendering************************************************************************************************************
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />,document.getElementById('app'));