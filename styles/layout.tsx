import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useLayout = makeStyles((theme: Theme) =>
    createStyles({
        left: {
            width: 230,
            minWidth: 230,
            minHeight: "100vh",
            zIndex: 1,
        },
        right: {
            flexGrow: 1,
            minWidth: 768,
            zIndex: 0,
            width: "auto",
        },
    })
);
