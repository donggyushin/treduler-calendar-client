import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { userLogout } from 'actions/user'
import './styles.scss'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DatePicker from './datepicker/datepicker'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState({
        redirect: false,
        dest: "/"
    })

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side: DrawerSide) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button >
                    <div onClick={_userLogout} className="drawer__list__item">
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary={"LOGOUT"} />
                    </div>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    if (redirect.redirect) {
        return <Redirect to={redirect.dest} />
    } else {
        return (
            <div className="private_main_header_container">
                <h1>
                    Treduler
                </h1>
                <DatePicker />
                <DehazeIcon className="navigation_icon" onClick={toggleDrawer('left', true)} />
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>

            </div>
        );
    }



    function _userLogout() {
        console.log('sad')
        setRedirect({
            redirect: true,
            dest: "/"
        })
        dispatch(userLogout())
    }
}