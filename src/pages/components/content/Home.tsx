import { Box, createStyles, Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {}

const useStyles = makeStyles(() =>
    createStyles({
        notice: {
            border: "1px solid skyblue",
            padding: 10,
            background: "#e3f4fc",
            "& h1": {
                color: "red",
                fontSize: 24,
                borderBottom: "1px solid skyblue",
            },
            "& h1 span": {
                color: "skyblue",
                fontSize: 14,
                fontWeight: "lighter",
                float: "right",
            },
        },
        betList: {
            marginTop: 20,
            border: "1px solid #d5d1d1",
            padding: 10,
            background: "white",
        },
    })
);

const Notice = () => {
    const classes = useStyles();
    return (
        <Box position="static" className={classes.notice}>
            <h1>
                ประกาศ <span>วันที่ 22/04/63</span>
            </h1>
        </Box>
    );
};

const BetList = () => {
    const classes = useStyles();
    return <Box position="static">ss</Box>;
};

const Home = (props: Props) => {
    return (
        <>
            <Notice />
            <BetList />
        </>
    );
};

export default Home;
