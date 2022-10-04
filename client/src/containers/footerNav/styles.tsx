import { makeStyles } from "@mui/material";

const useStyles: any = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    root1: {
        width: 200,
        color: 'white'
    }
}));

export default useStyles;