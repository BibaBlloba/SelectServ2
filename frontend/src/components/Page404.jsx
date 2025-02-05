import { Button, Result } from 'antd'
import React from 'react'

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" danger href='/'>Back Home</Button>}
      className='bg-white'
    />
  )
}

export default Page404
