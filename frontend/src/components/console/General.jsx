import React from 'react'
import { Button, Col, Divider, Form, InputNumber, Row, Select, Slider, Tabs } from 'antd';
import { useState } from 'react';


const ServerConfiguratorTabList = () => {
  return (
    <div>
      Server List
    </div>
  )
}

const ServerConfiguratorTab = () => {
  return (
    <div>
      <div className='min-h-[400px] flex justify-center items-center border-b-2'>
        <h1 className='text-white'>Фильтры</h1>
      </div>
      <ServerConfiguratorTabList />
    </div>
  )
}

const CustomServerConfiguratorTab = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = newValue => {
    setInputValue(newValue);
  };


  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
        <Form className='min-w-[300px]' layout='vertical'>
          <Form.Item label='Регион' className="custom-form-item">
            <Select size='large' className='custom-select max-w-[200px] text-white' placeholder='Выберите регион'>
              <Select.Option value='asd'>asd</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Процессор' className="custom-form-item">
            <Select size='large' className='custom-select text-white' placeholder='Выберите модель'>
              <Select.Option value='asd'>asd</Select.Option>
            </Select>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={20}
                  onChange={onChange}
                  value={typeof inputValue === 'number' ? inputValue : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  style={{
                    margin: '0 16px',
                  }}
                  value={inputValue}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label='Память' className="custom-form-item">
            <Select size='large' className='custom-select text-white' placeholder='Выберите объем'>
              <Select.Option value='asd'>asd</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Диск' className="custom-form-item">
            <Select size='large' className='custom-select text-white' placeholder='Выберите объем'>
              <Select.Option value='asd'>asd</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
      <div>
        <div className='text-white border-2 border-solid rounded-xl min-h-[500px] min-w-[400px] border-[#B5BDC2] p-5 flex flex-col gap-5'>
          <p className='text-[#586973]'>Сборка сервера 1-5 дней</p>
          <div className='flex flex-row justify-between'>
            <h1 className='text-xl'>Конфигурация</h1>
            <Button>Сбросить форму</Button>
          </div>
          <div className='flex flex-row justify-between'>
            <h1>Комплектующие</h1>
            <h1 className='text-xl'>asd</h1>
          </div>
          <Divider style={{ borderColor: 'white', margin: 0 }} />
          <h1 className='text-[15px] font-bold'>Сервис</h1>
          <h1>KVM-консоль</h1>
          <h1>Защита от DDOS</h1>
          <h1>Сборка сервера</h1>
          <Divider style={{ borderColor: 'white', margin: 0 }} />
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    key: '1',
    label: 'Готовые сервера',
    children: <ServerConfiguratorTab />,
  },
  {
    key: '2',
    label: 'Конфигуратор серверов',
    children: <CustomServerConfiguratorTab />,
  },
  {
    key: '3',
    label: 'Конфигуратор серверов с GPU',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '4',
    label: 'Kubernetes',
    children: 'Content of Tab Pane 1',
  },
];

const RentServer = () => {
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-light'>Заказ выделенного сервера</h1>
      <Tabs defaultActiveKey="1" items={items} size='large' className='custom-tabs-white-text custom-tabs no-border-tabs text-white' />
    </div>
  )
}

const General = () => {
  return (
    <div className='bg-[#181D20] text-white flex-grow'>
      <RentServer />
    </div>
  )
}

export default General
