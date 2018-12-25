import React from 'react';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const NotFoundPage = ({location}) => {
    let actionTo = (
        <div>
            <h5> The page <span style={{color: 'red'}}> {location.pathname}</span> cannot be found </h5>
            <Link to = '/welcome'> <Button>Go back Home</Button></Link>
        </div>
    )
    if(location.pathname == "/task" || location.pathname === "/dashboard") {
        actionTo = (
            <div>
                <h5> The page <span style={{color: 'red'}}> {location.pathname}</span> cannot be accessed unless you are Authenticated</h5>
                <Link to = '/login'><Button onClick = {console.log('hh')}> LogIn or Register </Button></Link>
            </div>
        )
    }   
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2> 404. Page Not Found </h2>
            {actionTo}
        </div>
    )
}

export default NotFoundPage;