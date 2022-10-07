import React from "react";

interface MyProps {
    name: string;
}

const Header = (props: MyProps): JSX.Element => {
    return (
        <h1>{props.name}</h1>
    )
}

export default Header