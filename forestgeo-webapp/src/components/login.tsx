"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import GetUser, { clientPrincipal } from "./getuser";
import { useRouter } from "next/navigation";

export interface LoginPureProps {}
export function LoginPure() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h3" component="h1">
          Welcome to the ForestGEO web-app
        </Typography>
        <Link
          href={`/login`}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h2" sx={{ pt: "20%" }}>
            Login
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export interface LoginProps {}
export default function Login() {
  const router = useRouter();
  const userInfo: clientPrincipal | undefined = GetUser();
    
  React.useEffect(() => {
    if (userInfo) {
      router.push('/validate');
    }
  });
  return <LoginPure />;
}
