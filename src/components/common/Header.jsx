import { React, useState } from 'react'
import { AppBar, Box, Toolbar, styled, Typography, InputBase } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { logoURL } from '../../constants/constant';
import HeaderMenu from './HeaderMenu';
const StyledToolbar = styled(Toolbar)`
  background:#000;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content:space-between;
  & > *{
    padding: 0 10px;
  }
  & > div {
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p{
      font-size:14px;
      font-weight:600;

    }
  }
  & > p {
    font-size:14px;
    font-weight:600;
    

  }
`
const InputSearchField = styled(InputBase)`
  background:#ffffff;
  height:30px;
  width:55%;
  border-radius:5px;
  

`
const Logo = styled('img')({
  width: 64
})


const Header = () => {
  const [open,setOpen] = useState(null);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  }
  const handleClose = () => {
    setOpen(null);
  }
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Logo src={logoURL} alt='logo'></Logo>
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>IMDb<Box component="span">Pro</Box></Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Whatchlist</Typography>
        </Box>
        <Typography>Sign in</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header;
