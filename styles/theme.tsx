import { createMuiTheme, createStyles, makeStyles } from "@material-ui/core";
import { blue, common, green, indigo } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createPalette" {
    interface SimplePaletteColorOptions {
        white?: string;
        secondary?: string;
    }

    interface PaletteColor {
        white: string;
        secondary?: string;
    }
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo["700"],
            secondary: indigo["50"],
            light: "whitesmoke",
            white: "#fff",
        },
        secondary: {
            main: "#212121",
            light: "whitesmoke",
        },
        success: {
            main: green["500"],
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
                padding: "10px",
                "&.link-active div:nth-last-child(1)": {
                    position: "absolute",
                    backgroundColor: common["white"],
                    height: "100%",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                },
                "&.link-active": {
                    color: indigo["700"],
                    boxShadow: "0 0 3px 0 #303f9f",
                },
                "&:not(.link-active):hover": {
                    opacity: 0.8,
                },
            },
        },
        MuiTypography: {
            h1: {
                fontSize: 16,
            },
            h5: {
                fontSize: 14,
            },
            h6: {
                fontSize: 12,
            },
            subtitle1: {
                fontSize: 10,
            },
            colorTextSecondary: {
                color: "inherit",
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
            gutters: {
                "@media (min-width: 600px)": {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: indigo["700"],
                color: common["white"],
            },
            colorSecondary: {
                backgroundColor: common["black"],
                color: common["white"],
            },
            colorDefault: {
                backgroundColor: "#fff",
                color: "#000",
            },
        },
        MuiCard: {
            root: {
                border: "1px solid #212121",
                boxShadow: "none",
                backgroundColor: "whitesmoke",
            },
        },
        MuiTableCell: {
            root: {
                fontSize: 10,
            },
            paddingNone: {
                "&:last-child": {
                    padding: 5,
                },
                padding: 5,
            },
        },
        MuiSvgIcon: {
            fontSizeSmall: {
                width: 15,
                height: 15,
            },
        },
        MuiFormControlLabel: {
            label: {
                fontSize: 12,
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
