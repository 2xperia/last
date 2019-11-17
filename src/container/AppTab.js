import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome'
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import Tab from './Tabs'
import Search from './Search'

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    if (pageText == 'Home') {
      return (
        <div style={{ backgroundColor: 'white',height:'100%', textAlign: 'center' }}>
          <NavBar mode="dark" style={{backgroundColor:"#3fcccb"}}>首页</NavBar>  
          <AppHome/>
          <img src={require("../img/1.png")} alt="" style={{width:'100%'}}/>
          <div>
            <div style={{backgroundColor:'#3fcccb',width:'5px',height:'20px',marginTop:'25px',float:'left'}}></div>
            <h1 style={{float:'left'}}>热门推荐</h1>
            <img src={require("../img/3.png")} alt="" style={{width:'100%'}}/>
          </div>
        </div>
      );
    }
    else if (pageText == "Point") {
      return(
        <div>
          <NavBar mode="dark" style={{backgroundColor:"#3fcccb"}}>灵感</NavBar>
          <Tab/>
        </div>
      )
    }
    else if(pageText == "Market"){
      return(
        <div>
          <NavBar mode="dark" style={{backgroundColor:"#3fcccb"}}>商城</NavBar>
          <Search/>
        </div>
      )
    }
    else{
      return(
        <NavBar mode="dark" style={{backgroundColor:"#3fcccb"}}>我的</NavBar>
      )
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '', width: '100%', top: 0 } : { height: 680 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={''}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Home')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="Point"
            badge={''}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Point')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Market')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}