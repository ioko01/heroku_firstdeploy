import {
    Box,
    createStyles,
    Grid,
    GridSpacing,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React from "react";
import CardBet from "../CardBet";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        notice: {
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: theme.palette.primary.dark,
            padding: 10,
            "& h1": {
                fontSize: 24,
                borderBottomStyle: "solid",
                borderBottomWidth: 1,
                borderBottomColor: theme.palette.primary.dark,
            },
        },
        betList: {
            marginTop: 20,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: theme.palette.primary.dark,
            padding: 10,
        },
    })
);

const Notice = () => {
    const classes = useStyles();
    return (
        <Box
            position="static"
            bgcolor="primary.secondary"
            color="primary.dark"
            className={classes.notice}
        >
            <Typography variant="h1" component="h1" color="error">
                ประกาศ
            </Typography>
            <span>วันที่ 22/04/63</span>
        </Box>
    );
};

const BetList = () => {
    const classes = useStyles();
    return (
        <Box
            position="static"
            bgcolor="primary.secondary"
            color="primary.dark"
            className={classes.betList}
        >
            <Typography
                variant="h1"
                component="h1"
                style={{ paddingBottom: 10 }}
            >
                หวยรายวัน
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={4} md={3}>
                    <CardBet />
                </Grid>
                <Grid item sm={4} md={3}>
                    <CardBet />
                </Grid>
                <Grid item sm={4} md={3}>
                    <CardBet />
                </Grid>
                <Grid item sm={4} md={3}>
                    <CardBet />
                </Grid>
                <Grid item sm={4} md={3}>
                    <CardBet />
                </Grid>
            </Grid>
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
