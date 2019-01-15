import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import styles from '../assets/index.css'

const { Header, Content, Sider, Footer } = Layout;

export default class CommonLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed:false
        }
    }
    render() {
        const { childContent,userName } = this.props;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    theme='light'
                >
                    <div className={styles.logo} />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className={styles.layout}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <span style={{float:'right'}}>欢迎 {userName} | <span>退出</span></span>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 750, }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{childContent}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        created by Julie | <a href="https://www.github.com/ggaoling">github</a>
                    </Footer>
                </Layout>
            </Layout>

        )
    }
}
