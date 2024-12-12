import { AppProvider } from '@toolpad/core'
import React from 'react'
import { MdDashboard } from 'react-icons/md';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'page',
    title: 'Page',
    icon: <MdDashboard />,
  },
  {
    segment: 'page-2',
    title: 'Page 2',
  },
];

const Console = () => {
  return (
    <div>
      <AppProvider navigation={NAVIGATION}
      // router={router}
      // theme={demoTheme}
      // window={demoWindow}
      >
        <DashboardLayout>
          <div>aa</div>
        </DashboardLayout>
      </AppProvider>
    </div >
  )
}

export default Console
