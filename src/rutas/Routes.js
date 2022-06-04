import React from 'react';
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Dashboard from '../paginas/Dashboard';
import Prueba1 from '../componentes/prueba1';
import Menu from '../componentes/menu'
import Prueba2 from '../componentes/prueba2';
import {Layout} from 'antd';

const { Header, Content, Sider } = Layout;

function Routes() {
  return (
    <BrowserRouter>
      <Layout >
        <Sider  width={250} className="site-layout-background">
          <Menu/>
        </Sider>
     
      <Layout>
        <Content  style={{
            padding: 24,
            margin: 0,
            minHeight: 630,
          }}>
          <Switch>    
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/prue1" element={<Prueba1 />} />
            <Route path="/prue2" element={<Prueba2 />} />
          </Switch>
        </Content>
        </Layout>
      </Layout>  
    </BrowserRouter>
  );
}

export default Routes;
