import { Stack } from "@mui/material" ; 
import  './Pshfbtn.css' ;

export const PSHFBtn = () => {
  return (
    <>
       <Stack direction="row" spacing={0}
       >
            <button className={'btn Profil'}>Profile</button>
            <button className={'btn Saved'}>Saved</button>
            <button className={'btn Hosted'}>Hosted</button>
            <button className={'btn Following'}>Following</button>
        </Stack>
    </>
  )
}
