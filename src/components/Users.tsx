import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useCurrentUser, useUsers } from "../api";
import useLogout from "../api/hooks/useLogout.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInvalidateUsers from "../api/hooks/useInvalidateUsers.ts";
// import usePrefetchUsers from "../api/hooks/usePrefetchUsers.ts";
// import useCachedUsers from "../api/hooks/useCachedUsers.ts";
import UsersList from "./UsersList.tsx";

export default function Users () {
  const { data: currentUser } = useCurrentUser();
  const logout = useLogout();
  const invalidateUsers = useInvalidateUsers();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => setPage(value);

  const { isLoading, data: { total_pages } = {} } = useUsers(page) || {};

  // usePrefetchUsers(data, {
  //   page: page + 1,
  //   enabled: !cachedUsers?.length && page + 1 < total_pages
  // });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Button color="primary" variant={"outlined"} onClick={async () => {
            await logout();
          }}>Logout</Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant={"outlined"} onClick={async () => {
            await invalidateUsers();
          }}>Refresh User Data</Button>
        </Grid>
      </Grid>
      <Box mt={3} />
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <UsersList isLoading={isLoading} page={page} />
      <Pagination count={total_pages} page={page} onChange={handlePageChange}  />
    </>
  );
}