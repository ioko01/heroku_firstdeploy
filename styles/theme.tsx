import { createMuiTheme, createStyles, makeStyles } from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
    interface SimplePaletteColorOptions {
        white?: string;
    }

    interface PaletteColor {
        white: string;
    }
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#222",
            light: "whitesmoke",
            white: "#fff",
        },
        secondary: {
            main: "#ff6347",
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "*": {
                    fontFamily: "'Kanit', sans-serif !important",
                },
                body: {
                    margin: 0,
                    padding: 0,
                },
                p: {
                    fontSize: 14,
                    fontWeight: "300",
                    margin: 0,
                },
                span: {
                    fontFamily: "'Kanit', sans-serif !important",
                    fontSize: 12,
                },
            },
        },
        MuiLink: {
            root: {
                display: "inline-block",
                position: "relative",
                color: "inherit",
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 5,
                paddingBottom: 5,
                "&.link-active div:nth-last-child(1)": {
                    position: "absolute",
                    backgroundColor: "#fff",
                    height: "100%",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                },
                "&.link-active": {
                    color: "black",
                },
            },
        },
        MuiTypography: {
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
            subtitle1: {
                fontSize: 12,
            },
        },
        MuiToolbar: {
            regular: {
                "@media (min-width: 600px)": {
                    minHeight: "auto",
                },
                "@media (min-width: 0px) and (orientation: landscape)": {
                    minHeight: "auto",
                },
                minHeight: "auto",
            },
        },
    },
});

export const useThemeProvider = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.light,
        },
        dark: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.light,
        },
        light: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
        secondary: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.dark,
        },
        white: {
            backgroundColor: theme.palette.primary.white,
            color: theme.palette.primary.dark,
        },
        tomato: {
            backgroundColor: theme.palette.primary.white,
            color: theme.palette.primary.dark,
        },
    })
);
