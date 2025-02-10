import { IconButton, Typography, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { tokens } from '../theme';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const SidebarPro = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setCollapse] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.custom_grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    )
  }

  return (
    <Sidebar backgroundColor={colors.custom_grey[600]}>
      <Menu>
        <MenuItem>
          <p>Users</p>
        </MenuItem>
        <Item
          title="Users"
          to="/home"
          icon={<FaUsers />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Dashboard"
          to="/home"
          icon={<FaUsers />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Forum comments"
          to="/home"
          icon={<FaUsers />}
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </Sidebar>
  )
}

export default SidebarPro
