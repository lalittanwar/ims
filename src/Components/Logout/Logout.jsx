import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
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