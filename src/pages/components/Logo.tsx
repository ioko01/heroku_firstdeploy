import { CardMedia } from "@material-ui/core";
import React from "react";

interface Props {}

const Logo = (props: Props) => {
    return (
        <CardMedia
            image="/hanoi.png"
            title="hanoi"
            style={{ width: "100%", height: 120 }}
        />
    );
};

export default Logo;
