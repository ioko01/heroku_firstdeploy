import {
    Box,
    createStyles,
    CssBaseline,
    makeStyles,
    Theme,
    ThemeProvider,
} from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useLayout } from "../../../styles/layout";
import { theme } from "../../../styles/theme";
import IndexContent from "./content/LayoutContent";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import TableRate from "./TableRate";
import UserDetail from "./UserDetail";

interface LayoutProps {
    children: React.ReactNode;
}

const HeadHTML = () => {
    const { isReady, asPath } = useRouter();
    const titleName = isReady
        ? asPath === "/"
            ? "HOME"
            : asPath.split("/")[1].toUpperCase()
        : "LOADING";

    return (
        <Head>
            <title>{titleName}</title>
        </Head>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
        },
    })
);

const Leftbar = () => {
    const classes = useStyles();
    const layout = useLayout();
    return (
        <Box
            className={`${layout.left} ${classes.root}`}
            bgcolor="primary.main"
            color="primary.white"
        >
            <Logo />
            <UserDetail />
            <TableRate />
        </Box>
    );
};

const Rightbar = ({ children }: LayoutProps) => {
    const layout = useLayout();
    return (
        <Box className={`${layout.right}`}>
            <NavigationBar />
            <IndexContent>{children}</IndexContent>
        </Box>
    );
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <HeadHTML />

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display="flex">
                    <Leftbar />
                    <Rightbar children={children} />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Layout;
