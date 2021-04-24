import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Person, ExitToApp } from "@material-ui/icons";
import React from "react";
import Link from "../../helpers/Link";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
        },
        userContent: {
            padding: "5px 10px 0px 10px",
        },
        userItem: {
            display: "flex",
            justifyContent: "space-between",
            color: theme.palette.primary.white,
        },
    })
);

const UserDetail = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.userContent}>
                <Box className={classes.userItem}>
                    <span>User</span>
                    <span>abcde</span>
                </Box>
                <Box className={classes.userItem}>
                    <span>Role</span>
                    <span>Member</span>
                </Box>
                <Box className={classes.userItem}>
                    <span>Balance</span>
                    <span>5000000</span>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" paddingY={2}>
                <Link href="/account" as="/account" underline="none">
                    <Box display="flex" alignItems="center">
                        <Person fontSize="default"></Person>
                        <span>&nbsp;ข้อมูลผู้ใช้</span>
                    </Box>
                </Link>
                <span>|</span>
                <Link href="/logout" as="/logout" underline="none">
                    <Box display="flex" alignItems="center">
                        <ExitToApp fontSize="default"></ExitToApp>
                        <span>&nbsp;ออกจากระบบ</span>
                    </Box>
                </Link>
            </Box>
        </>
    );
};

export default UserDetail;
