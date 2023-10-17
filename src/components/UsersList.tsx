import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import {IUser, useUsers} from "../api";
import { useNavigate } from "react-router-dom";
import useCachedUsers from "../api/hooks/useCachedUsers.ts";

export default function UsersList ({ page, isLoading }: { page: number; isLoading: boolean; }) {
  const navigate = useNavigate();
  const { data: { data: users = [] } = {} } = useUsers(page) || {};

  return (
    isLoading ? <CircularProgress /> : <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
    </List>  );
}