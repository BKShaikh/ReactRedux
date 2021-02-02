import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Home = props => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key="1">LOGIN
                        <Link exact to="/login" />
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', height: '100vh' , marginTop: 70 }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Home</h1>
                </div>
            </Content>
        </Layout>
    );
};

Home.propTypes = {

};

export default Home;