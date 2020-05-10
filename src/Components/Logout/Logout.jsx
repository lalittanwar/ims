
import React, { useEffect } from "react";
import LogoutService from "../../Services/LogoutService";

export default function Logout() {

    const logoutService = new LogoutService();

    useEffect(() => {
        logoutService.logout();
    })

    return (
        <React.Fragment></React.Fragment>
    )
}