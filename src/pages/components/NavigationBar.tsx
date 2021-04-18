import {
    AppBar,
    Box,
    createStyles,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import { EditOutlined, ListAlt, Person } from "@material-ui/icons";
import React from "react";
import ActiveLink from "../../helpers/ActiveLink";

interface Props {}

const useStyles = makeStyles(() =>
    createStyles({
        transition: {
            transition: "height .25s",
        },
    })
);

const Nav1 = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-evenly"
                    paddingY={1}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <EditOutlined fontSize="default"></EditOutlined>
                        <p>หวยไทย</p>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <ListAlt fontSize="default"></ListAlt>
                        <p>งวดที่ 04/13/2021</p>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <ListAlt fontSize="default"></ListAlt>
                        <p>เวลา</p>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Person fontSize="default"></Person>
                        <p>ชื่อผู้ใช้</p>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const Nav2 = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Box marginX="auto">
                    <ActiveLink href="/" as="/" underline="none">
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <EditOutlined fontSize="default"></EditOutlined>
                            <span>&nbsp;แทงหวย</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink
                        href="/bet-result"
                        as="/bet-result"
                        underline="none"
                    >
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;รายการแทง</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink href="/signin" as="/signin" underline="none">
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;เข้าสู่ระบบ</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const NavigationBar = (props: Props) => {
    return (
        <>
            <Nav1 />
            <Nav2 />
        </>
    );
};

export default NavigationBar;
