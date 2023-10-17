import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useCurrentUser, useUsers } from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../api/hooks/useCreateUser.ts";

export default function User () {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();
  const { data: currentUser } = useCurrentUser();
  const { data: { data: users = [] } = {}, total } = useUsers(1);
  const createUserMutation = useCreateUser();
  const updateUser = async (data) => {
    await createUserMutation.mutateAsync(data)
  };

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser]);
  useEffect(() => {
    if (!user) {
      setUser(users[0])
    }
  }, [users]);

  return (
    <>
      <Button color="primary" variant={"outlined"} onClick={() => {
        navigate('/users');
      }}>Go to the list</Button>
      <Button color="primary" variant={"outlined"} onClick={() => updateUser(user)}>Update user</Button>
      <Box mt={3} />
      <Typography variant="h4" gutterBottom>
        There are {total} users in the DB
      </Typography>
      <Typography variant="h4" gutterBottom>
        Logged In User data
      </Typography>
      <Grid container spacing={2}>
        <Grid item><Avatar alt="Remy Sharp" src={user?.avatar} /></Grid>
        <Grid item>{user?.first_name} {user?.last_name}</Grid>
      </Grid>
    </>
  );
}