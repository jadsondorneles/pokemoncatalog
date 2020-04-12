import React from 'react'
import { NavLink  } from 'react-router-dom'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import menuicon from '../../assets/images/menu.png'
import logo from '../../assets/images/logo.png'
import iconListMenu from '../../assets/images/icon-menu.png'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  btnDraw: {
    position: 'absolute',
    padding: 0,
    minWidth: 0,
    borderRadius: '50%',
    padding: 8,
    top: 20,
    right: 20,
    '&:hover': {
        background: '#fff',
    }
  },
  IconMenu: {
      width: 32,
  },
  logoBox: {
      '& img': {
        width: 200,
        position: 'relative',
        left: 17,
      }
  },
  iconListMenuI: {
      width: 32,
  },
  navItemLink: {
    
  },
  ListItemBtn: {
      '&:hover': {
          background: 'transparent!important'
      },
      '& a': {
        position: 'absolute',
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '8px 16px 6px 16px',
        textDecoration: 'none',
        color: 'var(--grey)',
        fontFamily: 'var(--font-secondary)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        }
      },
      '& a img': {
          visibility: 'hidden',
      },
      '& a.active img': {
          visibility: 'visible',
      },
  },
  dividerItem: {
    marginBottom: 8,
  },
  listMenus: {
    marginBottom: 15,
  }
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List className={classes.logoBox}>
            <img src={logo} alt="Pokémon Catalog" />
        </List>
        <Divider className={classes.dividerItem}/>
        <List className={classes.listMenus}>
            <ListItem button className={classes.ListItemBtn}>
                <NavLink exact activeClassName="active" to="/">
                    <ListItemIcon><img src={iconListMenu} alt="Home" id="rotating" className={classes.iconListMenuI}/> </ListItemIcon>
                    <ListItemText primary={`Home`} />
                </NavLink>
            </ListItem>
        </List>
        <List>
            <ListItem button className={classes.ListItemBtn}>
                <NavLink exact activeClassName="active" to="/Catalog">
                    <ListItemIcon><img src={iconListMenu} alt="Catalog" id="rotating" className={classes.iconListMenuI}/> </ListItemIcon>
                    <ListItemText primary={`Catalog`} />
                </NavLink>
            </ListItem>
        </List>
    </div>
  )

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.btnDraw}><img src={menuicon} alt="menu" className={classes.IconMenu} /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}