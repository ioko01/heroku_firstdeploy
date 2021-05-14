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
            <Typography variant="body1" component="p">
                ขณะนี้มีกลุ่มลูกค้าและแอดมินของบางสายงานได้ทำการฝากแทงหวยเข้ามา
                ซึ่งทางบริษัทได้ตรวจสอบพบว่า เป็นรายการแทงที่ไม่ปกติ
                หากบริษัทตรวจพบรายการฝากแทงที่ทำให้บริษัทเกิดความเสียหายในรูปแบบเพื่อทำยอดคอมมิชชั่น
                ทางบริษัทขอสงวนสิทธิ์ในการ
            </Typography>
            <Typography variant="h4" component="span" color="error">
                ***ยกเลิกรายการเล่นทุกกรณี***
            </Typography>
            <Typography variant="body1" component="p">
                เรียนมาเพื่อทราบ และปฏิบัติตามกฎกติกาของทางบริษัท ขอบคุณครับ
            </Typography>
        </Box>
    );
};

const BetList = () => {
    const classes = useStyles();
    return (
        <>
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
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                </Grid>
            </Box>

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
                    หวยต่างประเทศ
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                    <Grid item xs={4} lg={3}>
                        <CardBet />
                    </Grid>
                </Grid>
            </Box>
        </>
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
