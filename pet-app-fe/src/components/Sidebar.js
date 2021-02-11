import './App.css';
import { Layout, Menu, Divider } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import { SnippetsOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import addArticle from '../blog/addArticle';
import Blog from '../blog/blog';
import PostDetails from '../blog/postdetails';
import './Sidebar.css';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		const { collapsed } = this.state;
		return (
			<Layout className="all-layout">
				<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="sider">
					<div className="logo" />
					<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
						<SubMenu key="sub1" icon={<SnippetsOutlined />} title="Blog">
							<Menu.Item key="/add_article">
								Yeni Yazı
								<Link to="/add_article" />
							</Menu.Item>
							<Menu.Item key="/posts">
								Blog
								<Link to="/posts" />
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Content className="site-content">
						<div className="site-layout-background2">
							<Switch>
								<Route path="/add_article" component={addArticle}></Route>
								<Route exact path="/posts" component={Blog}></Route>
								<Route exact path="/posts/:id" component={PostDetails} />
							</Switch>
						</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default SideBar;
