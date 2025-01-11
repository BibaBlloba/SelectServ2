import { Menu } from 'antd'
import React from 'react'
import { FaInfoCircle, FaMoneyBill } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { TbBellRingingFilled } from 'react-icons/tb'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { Col, Container, Nav, Tab } from 'react-bootstrap'

const items = [
  {
    key: "/profile/nav1",
    label: "Основные",
    icon: <IoPerson size={20} />
  },
  {
    key: "/profile/nav2",
    label: "Платежная информация",
    icon: <FaMoneyBill size={20} />
  },
  {
    key: "/profile/nav3",
    label: "Уведомления",
    icon: <TbBellRingingFilled size={20} />
  },
  {
    key: "/profile/nav4",
    label: "Информация",
    icon: <FaInfoCircle size={20} />
  },
]


const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-row min-h-screen bg-white'>
      <Container className='mt-20'>
        <Tab.Container id="ledt-tabs" defaultActiveKey="first">
          <Col sm={3}>
            <Nav variant='pills' className='flex-col mt-2'>
              <Nav.Item>
                <Nav.Link eventKey='first'>First</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Second</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='first'>First</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='first'>First</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Pane eventKey='first'>
              <h1>Test1</h1>
            </Tab.Pane>
          </Col>
        </Tab.Container>
      </Container>
    </div>
  )
}

export default Profile
