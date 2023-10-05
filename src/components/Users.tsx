import * as React from 'react';
import Box from '@mui/material/Box';
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
import { IUser } from "../api/interfaces.ts";
import {useCurrentUser, useUsers} from "../api";
import useLogout from "../api/hooks/useLogout.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useInvalidateCurrentUser from "../api/hooks/useInvalidateCurrentUser.ts";

export default function UsersList () {
  const { data: currentUser } = useCurrentUser();
  const invalidateCurrentUser = useInvalidateCurrentUser();
  const logout = useLogout();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data: { data: users = [] } = {}, isLoading } = useUsers(page);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Button color="primary" variant={"outlined"} onClick={async () => {
        await logout.mutateAsync();
      }}>Logout</Button>
      <Button color="primary" variant={"outlined"} onClick={async () => {
        await invalidateCurrentUser.mutateAsync();
      }}>Invalidate User</Button>
      <Box mt={3} />
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      {isLoading ? <CircularProgress /> : <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users.map((user: IUser) => {
          const labelId = `checkbox-list-secondary-label-${user.id}`;
          return (
            <ListItem
              key={user.id}
              disablePadding
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

      <Pagination count={2} page={page} onChange={handlePageChange}  />
    </>
  );
}