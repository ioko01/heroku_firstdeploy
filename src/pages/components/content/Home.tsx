import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props {}

const useStyles = makeStyles(() =>
    createStyles({
        notice: {
            border: "1px solid #000",
            padding: 10,
            background: "#fff",
            "& h1": {
                color: "red",
                fontSize: 24,
                borderBottom: "1px solid #000",
            },
            "& h1 span": {
                color: "#000",
                fontSize: 14,
                fontWeight: "lighter",
                float: "right",
            },
        },
        betList: {
            marginTop: 20,
            border: "1px solid #000",
            padding: 10,
            background: "white",
        },
    })
);

const Notice = () => {
    const classes = useStyles();
    return (
        <Box position="static" className={classes.notice}>
            <Typography variant="h1" component="h1">
                ประกาศ <span>วันที่ 22/04/63</span>
            </Typography>
        </Box>
    );
};

const BetList = () => {
    const classes = useStyles();
    return (
        <Box position="static" className={classes.betList}>
            ss
        </Box>
    );
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
