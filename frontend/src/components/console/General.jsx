import React, { useEffect } from 'react'
import { Button, Col, Divider, Form, InputNumber, Row, Select, Slider, Tabs } from 'antd';
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCurrencyRuble } from "react-icons/md";
import { IconButton } from '@mui/material';
import axios from 'axios';


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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const onChange = newValue => {
    setInputValue(newValue);
  };

  const get_hardware_data = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/hardware`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching hardware data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get_hardware_data()
  }, [])

  function formatNumberWithSpaces(number) {
    // Преобразуем число в строку и удаляем все существующие пробелы
    const numStr = String(number).replace(/\s/g, '');

    // Используем регулярное выражение для добавления пробелов каждые 3 цифры с конца
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  if (loading) {
    return (
      <div>loading...</div>
    )
  } else {
    return (
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col max-w-[500px]'>
          <Form className='min-w-[300px]' layout='vertical'
            onFinish={(values) => { console.log('Данные формы:', values, 'procCount:', inputValue) }}
          >
            <Form.Item label='Регион' className="custom-form-item" name='region'>
              <Select size='large' className='custom-select max-w-[200px] text-white' placeholder='Выберите регион'>
                <Select.Option value='asd'>asd</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Процессор' className="custom-form-item" name='proc'>
              <Select size='large' className='custom-select text-white' placeholder='Выберите модель'>

                {data && data
                  .filter(item => item.type === 'processor')
                  .map(item => (
                    <Select.Option key={item.id} value={item.id}>
                      <div className='flex flex-row justify-between'>
                        <h1>{item.title}</h1>
                        <div className='flex flex-row items-center'>
                          <h1>{formatNumberWithSpaces(item.value)}</h1>
                          <MdCurrencyRuble />
                        </div>
                      </div>
                    </Select.Option>
                  ))
                }

              </Select>
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    className='custom-slider'
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
            <Form.Item label='Память' className="custom-form-item" name='memory'>
              <Select size='large' className='custom-select text-white' placeholder='Выберите объем'>
                <Select.Option value='asd'>asd</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Диск' className="custom-form-item" name='disk'>
              <Select size='large' className='custom-select text-white' placeholder='Выберите объем'>
                <Select.Option value='asd'>asd</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <div className='border-[1px] border-[#586973] bg-[#2D3236] rounded-md min-h-[80px] p-5 flex justify-between items-center'>
            <p>
              Нет нужных комплектующих? Мы привезем их под заказ. Обратитесь в <a className='text-blue-500'>службу поддержки</a>.
            </p>
          </div>
        </div>
        <div className='font-light'>
          <div className='text-white border-2 border-solid rounded-xl min-h-[500px] min-w-[400px] border-[#B5BDC2] p-5 flex flex-col gap-5'>
            <p className='text-[#586973]'>Сборка сервера 1-5 дней</p>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-xl font-normal'>Конфигурация</h1>
              <IconButton><FaRegTrashAlt className='text-[#586973] text-[20px]' /></IconButton>
            </div>
            <div className='flex flex-row justify-between'>
              <h1>Комплектующие</h1>
              <h1 className='text-xl'>asd</h1>
            </div>
            <Divider style={{ borderColor: 'white', margin: 0 }} />
            <h1 className='text-[15px] font-normal'>Сервис</h1>
            <div className='flex flex-row justify-between'>
              <h1>KVM-консоль</h1>
              <h1>Бесплатно</h1>
            </div>
            <div className='flex flex-row justify-between'>
              <h1>Защита от DDOS</h1>
              <h1>Бесплатно</h1>
            </div>
            <div className='flex flex-row justify-between'>
              <h1>Сборка сервера</h1>
              <h1>Бесплатно</h1>
            </div>
            <Divider style={{ borderColor: 'white', margin: 0 }} />
            <h1 className='font-normal'>Тариф</h1>
            <Form
              onFinish={(values) => { console.log(values) }}
            >
              <Form.Item name='time'>
                <Select className='custom-select text-white' placeholder='Выберите тариф'>
                  <Select.Option value='1'>1 Месяц</Select.Option>
                  <Select.Option value='2'>2 Месяца</Select.Option>
                  <Select.Option value='3'>3 Месяца</Select.Option>
                  <Select.Option value='4'>1 Год</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <div className='flex flex-row justify-between items-center text-white text-2xl font-light'>
                  <h1>Итого:</h1>
                  <h1>asd</h1>
                </div>
              </Form.Item>
              <Form.Item>
                <Button block htmlType='submit'>Заказать сервер</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
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
