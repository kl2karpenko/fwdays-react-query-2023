import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import { IUser, useCurrentUser, useUsers } from "../api";
import useLogout from "../api/hooks/useLogout.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInvalidateUsers from "../api/hooks/useInvalidateUsers.ts";
import usePrefetchUsers from "../api/hooks/usePrefetchUsers.ts";
import useCachedUsers from "../api/hooks/useCachedUsers.ts";

export default function UsersList () {
  const { data: currentUser } = useCurrentUser();
  const logout = useLogout();
  const invalidateUsers = useInvalidateUsers();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => setPage(value);

  const { data: cachedUsers } = useCachedUsers(page) || {};
  const {
    data,
    isLoading
  } = useUsers(page, {
    enabled: !cachedUsers?.length
  });
  const { data: newUsers, total_pages } = data || {};
  const users = cachedUsers || newUsers;

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
      {isLoading ? <CircularProgress /> : <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users?.map((user: IUser) => {
          const labelId = `checkbox-list-secondary-label-${user.id}`;
          return (
            <ListItem
              key={user.id}
              disablePadding
              secondaryAction={<Button color="secondary" variant={"outlined"} onClick={() => {
                navigate('/current');
              }}><VisibilityIcon /></Button>}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={user.last_name}
                    src={user.avatar}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${user.first_name} ${user.last_name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>}

      <Pagination count={total_pages} page={page} onChange={handlePageChange}  />
    </>
  );
}