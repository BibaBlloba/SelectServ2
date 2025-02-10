import { IconButton, Typography, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCommentAlt, FaUsers } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { UserContext } from '../../context/UserContext';
import { IoMdMenu } from 'react-icons/io';

const SidebarPro = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setCollapse] = useState(false)
  const [selected, setSelected] = useState('Users')
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);

  function getStringBeforeCharacter(str, char) {
    // Найдите индекс указанного символа
    const index = str.indexOf(char);

    // Если символ найден, верните подстроку до этого символа
    if (index !== -1) {
      return str.slice(0, index);
    }

    // Если символ не найден, верните оригинальную строку или что-то другое по вашему усмотрению
    return str;
  }

  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.custom_back[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography fontSize={18}>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    )
  }

  return (
    <Sidebar collapsed={isCollapsed} backgroundColor={colors.custom_back[700]}>
      <div className={`flex flex-row ${!isCollapsed ? "justify-end" : "justify-center"}`}>
        <IconButton onClick={() => setCollapse(!isCollapsed)}>
          <IoMdMenu className='text-white mr-[10px] mt-[10px]' />
        </IconButton>
      </div>
      {!isCollapsed && (
        <div className='gap-3 pb-[50px] pt-[10px] flex flex-col justify-center items-center'>
          <div className='flex text-white justify-center items-center border-[1px] bg-[#171E29] border-[#31435D] rounded-md aspect-square sm:h-[128px] sm:w-[128px] h-[80px] w-[80px] text-xl overflow-hidden'>{getStringBeforeCharacter(email, '@')}</div>
          <p className='text-white text-xl'>{email}</p>
        </div>
      )}
      <Menu>
        <Item
          title="Users"
          to="/admin/forum"
          icon={<FaUsers />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Dashboard"
          to="/home"
          icon={<MdOutlineDashboard />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Forum comments"
          to="/home"
          icon={<FaCommentAlt />}
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </Sidebar>
  )
}

export default SidebarPro
