import { useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { tokens } from '../../theme'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import { FaCommentAlt, FaUsers } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'
import { UserContext } from '../../context/UserContext'

const Slider = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setCollapse] = useState(false)
  const [selected, setSelected] = useState('Users')
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);


  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <MenuItem
          active={selected === title}
          style={{ color: colors.custom_back[100] }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography fontSize={18}>{title}</Typography>
        </MenuItem>
      </Link>
    );
  };

  function getStringBeforeCharacter(str, char) {
    const index = str.indexOf(char);
    if (index !== -1) {
      return str.slice(0, index);
    }
    return str;
  }

  if (!token) {
    window.location.href = '/'
  } else {
    return (
      <Sidebar collapsed={isCollapsed} backgroundColor={'#fff'}>
        <div className={`flex flex-row ${!isCollapsed ? "justify-between" : "justify-center"} items-center`}>
          {!isCollapsed && (
            <div className='gap-3 pt-[10px] px-5 flex flex-row justify-center items-center'>
              <div className='flex justify-center items-center border-[1px] border-[#31435D] rounded-md aspect-square sm:h-[30px] sm:w-[30px] text-xl overflow-hidden'>{getStringBeforeCharacter(email, '@')}</div>
              <p className='text-xl'>{email}</p>
            </div>
          )}
          <IconButton onClick={() => setCollapse(!isCollapsed)}>
            <IoMdMenu className='mr-[10px] mt-[10px]' />
          </IconButton>
        </div>
        <Menu>
          <Item
            title="Общая информация"
            to="/console/general"
            icon={<FaCommentAlt />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Новый сервер"
            to="/console/rent"
            icon={<FaCommentAlt />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Общая информация"
            to="/console/general"
            icon={<FaCommentAlt />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    )
  }
}

export default Slider
