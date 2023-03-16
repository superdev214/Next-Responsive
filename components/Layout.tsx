// components/Layout.tsx

import React, { ReactNode } from "react";
import { Container, AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const LOGO =
	"";

type Props = {
	children: any;
};

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "white",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	logo: {
		height: "40px",
	},
	footer: {
		backgroundColor: theme.palette.grey[200],
		padding: theme.spacing(2),
		marginTop: "auto",
		textAlign: "center",
		position: "fixed",
		bottom: 0,
		width: "100%",
	},
}));

export default function Layout({ children }: Props) {
	const classes = useStyles();
	return (
		<>
			<AppBar position="static" className={classes.appBar} elevation={0}>
				<Toolbar className={classes.toolbar}>
					<img src={LOGO} alt="Logo" className={classes.logo} />
					<Typography variant="h6" color="primary">
						Sign Out
					</Typography>
				</Toolbar>
			</AppBar>
			<hr/>
			<Box minHeight="100vh">{children}</Box>
			<footer className={classes.footer} style={{textAlign:"right"}}>
				<Typography variant="body2" color="textSecondary">
					All Rights Reserved &copy; {new Date().getFullYear()}
					{" "}|{" "}
					<Link href="/privacy-policy" color="inherit">
						Privacy Policy
					</Link>{" "}
					|{" "}
					<Link href="/terms-and-conditions" color="inherit">
						Terms and Conditions
					</Link>
				</Typography>
			</footer>
		</>
	);
}
