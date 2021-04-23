import React from "react";
import {
    Theme,
    createStyles,
    makeStyles,
    useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            backgroundColor: theme.palette.success.main,
            color: theme.palette.primary.white,
        },
        details: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        content: {
            flex: "1 0 auto",
            "&:last-child": {
                padding: 10,
            },
        },
        cover: {
            minWidth: 55,
            minHeight: 30,
            maxWidth: 70,
            maxHeight: 40,
        },
    })
);

const CardBet = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                style={{ margin: 5, marginTop: 10 }}
                className={classes.cover}
                image="/hanoi.png"
                title="hanoi"
            />

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        หวยลาว STAR VIP
                    </Typography>
                    <Typography component="h6" variant="h6">
                        21-04-2021
                    </Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" color="textSecondary">
                            เวลาปิด
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            21/04/2021, 21:45:00
                        </Typography>
                    </Box>
                </CardContent>
            </div>
        </Card>
    );
};

export default CardBet;
