import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";

export interface IUser {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface IUsersListProps {
  users: IUser[];
}

export default function UsersList ({ users = [] }: IUsersListProps) {
  console.log(users,' users ');
  return (
    <>
      <Button color="primary" variant={"outlined"}>Logout</Button>
      <Box mt={3} />
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
      </List>
    </>
  );
}