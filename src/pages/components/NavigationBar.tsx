import {
    AppBar,
    Box,
    createStyles,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import { EditOutlined, ListAlt } from "@material-ui/icons";
import React from "react";
import ActiveLink from "../../helpers/ActiveLink";

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
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box
                    width="auto"
                    display="flex"
                    justifyContent="center"
                    textAlign="center"
                    style={{ whiteSpace: "nowrap" }}
                >
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
                            <span>&nbsp;รายการแทง (เรียงตามเวลา)</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink
                        href="/bet-result/type"
                        as="/bet-result/type"
                        underline="none"
                    >
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;รายการแทง (เรียงตามชนิดหวย)</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink href="/balance" as="/balance" underline="none">
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;บัญชีการเงิน</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink href="/reward" as="/reward" underline="none">
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;ตรวจรางวัล</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink
                        href="/about/rule"
                        as="/about/rule"
                        underline="none"
                    >
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;กฏกติกา</span>
                        </Box>
                        <Box
                            className={classes.transition}
                            position="absolute"
                            zIndex={1}
                            height={0}
                        ></Box>
                    </ActiveLink>
                    <ActiveLink
                        href="/about/howto"
                        as="/about/howto"
                        underline="none"
                    >
                        <Box
                            position="relative"
                            display="flex"
                            alignItems="center"
                            zIndex={2}
                        >
                            <ListAlt fontSize="default"></ListAlt>
                            <span>&nbsp;วิธีเล่นหวย</span>
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

const NavigationBar = () => {
    return (
        <>
            <Nav1 />
        </>
    );
};

export default NavigationBar;
