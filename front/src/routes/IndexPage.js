import React from 'react'
import { Layout, Menu, Icon,Button } from 'antd'
import styles from '../assets/index.css'
import { connect } from 'dva'
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
const { Header, Content, Sider, Footer } = Layout;

function contentRender() {

}
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handleSelect=({item,key,selectedKeys})=>{
    console.log('select',...selectedKeys)
  }
  render() {
    const { user } = this.props;
    const { userName, isAdmin } = user;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          theme='light'
        >
          <div className={styles.logo} />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onSelect={({ item, key, selectedKeys })=>this.handleSelect({ item, key, selectedKeys })}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>个人信息</span>
            </Menu.Item>
            <Menu.Item key="2">
              {isAdmin ? <Icon type="upload" /> : <Icon type="edit" />}
              {isAdmin ? <span>添加问卷</span> : <span>问卷</span>}
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>历史记录</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.layout}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Button   onClick={this.toggle} style={{width:'11',border:'none'}}>
              <Icon
                className={styles.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Button>

            <span style={{ float: 'right',padding:'0 100px',color:'#1890ff'}}>欢迎 {userName} &nbsp;&nbsp;|&nbsp;&nbsp;<span className={styles.logout}>退出</span></span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 750, }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{contentRender()}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            created by Julie | <a href="https://www.github.com/ggaoling">github</a>
          </Footer>
        </Layout>
      </Layout>

    )
  }
}


export default connect(({ user }) => ({ user }))(IndexPage);
