import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { AccountCircleOutlined, Comment, MessageOutlined, Notifications, ThumbDown, ThumbUp } from '@material-ui/icons';
import React from 'react';
import MyForm from './MyForm';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: theme.spacing(8)
    },
    iconSpacing: {
        marginRight: theme.spacing(2)
    }
}))

function NavbarComponent() {

    const classes = useStyles();
    const [anchorEl, setAnchoEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchoEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchoEl(null)
    }


    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' style={{ flexGrow: 1 }} >
                        Home
                    </Typography>
                    <div>
                        <IconButton
                            edge='end'
                            color='inherit'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                        >
                            <AccountCircleOutlined />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} >View Profile</MenuItem>
                            <MenuItem onClick={handleClose} >Change Password</MenuItem>
                            <MenuItem onClick={handleClose} >Logout</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
            <div className={classes.content} >
                <Typography variant='h4' gutterBottom >
                    Welcome to your dashboard
                </Typography>
                <div style={{ display: 'flex', justifyContent:'space-evenly' }}>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }} >
                        <MessageOutlined className={classes.iconSpacing} />
                        <Typography variant='body1' >2 Messages</Typography>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }} >
                        <ThumbUp className={classes.iconSpacing} />
                        <Typography variant='body1' >10 Likes</Typography>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }} >
                        <ThumbDown className={classes.iconSpacing} />
                        <Typography variant='body1' >4 Dislikes</Typography>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }} >
                        <Comment className={classes.iconSpacing} />
                        <Typography variant='body1' >20 Comments</Typography>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }} >
                        <Notifications className={classes.iconSpacing} />
                        <Typography variant='body1' >7 Notifications</Typography>
                    </div>
                </div>
                <Typography variant='body1' gutterBottom >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non ut porro quam ipsa! Assumenda cumque quod
                    libero earum? Cumque consequuntur eveniet vel non, architecto repellendus nobis provident debitis placeat, explicabo
                    omnis ipsa doloremque dolore praesentium rem ullam molestias saepe.
                </Typography>
                <MyForm/>
            </div>

        </div>
    )
}

export default NavbarComponent;