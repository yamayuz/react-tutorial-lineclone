import { Button } from '@mui/material';
import { auth } from "../firebase";
import React from 'react'

export function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()}>サインアウト</Button>
        </div>
    );
};
