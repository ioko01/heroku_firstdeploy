import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import { useThemeProvider } from "../../../../styles/theme";

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles(() =>
    createStyles({
        fullContent: {
            minHeight: "100vh",
        },
    })
);

const IndexContent = ({ children }: Props) => {
    const theme = useThemeProvider();
    const classes = useStyles();
    return (
        <Box className={`${classes.fullContent}`} bgcolor="primary.white">
            <Typography component="div" variant="body1">
                <Box style={{ padding: 15 }}>{children}</Box>
            </Typography>
        </Box>
    );
};

export default IndexContent;
