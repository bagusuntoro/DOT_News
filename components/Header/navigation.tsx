import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Button } from 'antd';

type MenuItemType = {
  label: string;
  key: string;
  // icon: JSX.Element;
};
type MenuItemWithGroupType = MenuItemType;

const items: Array<MenuItemWithGroupType> = [
  {
    label: 'HOME',
    key: 'mail',
    // icon: <MailOutlined />,
  },
  {
    label: 'NEWS',
    key: 'news',
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'EVENT',
    key: 'event',
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'HC CORNER',
    key: 'hc',
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'ADMIN PANEL',
    key: 'admin',
    // icon: <AppstoreOutlined />,
  },
  // {
  // label: 'SEARCH NEWS',
  // key: 'search',
  // icon: <AppstoreOutlined />,
  // },
];

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1D3244',
          paddingLeft: '100px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/DOTLogo.png" alt="logo DOT" width={100} height={50} style={{ margin: 'auto' }} />
          <h2 style={{ color: 'green', marginRight: '100px' }}>NEWS</h2>
          {items.map((item) => {
            return (
              <Menu.Item
                key={item.key}
                style={{
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  backgroundColor: '#1D3244',
                  color: 'white'
                }}
              >
                <span>{item.label}</span>
              </Menu.Item>
            );
          })}
        </div>
        <Button type="primary" icon={<SearchOutlined />} style={{ margin: 'auto', backgroundColor: 'green' }}>
          Search News
        </Button>
      </Menu >
    </>
  );
};

export default Navigation;
