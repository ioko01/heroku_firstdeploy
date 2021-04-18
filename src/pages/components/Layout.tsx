import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useLayout } from "../../../styles/layout";
import { theme } from "../../../styles/theme";
import IndexContent from "./content/LayoutContent";
import NavigationBar from "./NavigationBar";

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
                    {/* <Leftbar /> */}
                    <Rightbar children={children} />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Layout;
