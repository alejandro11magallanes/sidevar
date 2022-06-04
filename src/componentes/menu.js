import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

import {DataMenu} from "./DataMenu"


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    label,
    children
  };
}

const datos = DataMenu.map(function(dato){
  return getItem(dato.label, dato.llave, dato.icon,
  dato.programas.map(function(sub){
    return getItem(sub.titulo)
  })) 
})


const Sider = () => {
 

  return (
    <Menu
      style={{
        height: '100%',
        borderRight: 0,
      }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={['1','2']}
      mode="inline"
      items={datos}
    />
  );
};

export default () => <Sider />;