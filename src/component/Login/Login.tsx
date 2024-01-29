"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}

        />
        <br />
        <TextField
          label="Password"
          required
          id="outlined-required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </Box>
      <Box>
        <Button onSubmit={handleSubmit}>Submit</Button>
      </Box>
    </div>
  );
}

export default Login;
