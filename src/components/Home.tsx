import * as React from 'react';
import { useNavigate } from "react-router-dom";
import {useCurrentUser} from "../api";
import {useEffect} from "react";

export default function Home() {
  const navigate = useNavigate();
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      navigate('/users')
    } else {
      navigate('/login')
    }
  }, [currentUser]);

  return (
    < span />
  );
}
