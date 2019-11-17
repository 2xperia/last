import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import Topic from './Topic'
import { Grid } from 'antd-mobile';

const newData = {
    name1:'桌',name2:'床',name3:'椅',name4:'几',name5:'柜',name6:'书架',name7:'沙发',name8:'家居饰品',name9:'户外家具',name10:'全部分类'
}

const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

export default class Search extends Component {
    state = {
        value: '美食',
        };
        componentDidMount() {
        this.autoFocusInst.focus();
        }
        onChange= (value) => {
        this.setState({ value });
        };
        clear = () => {
        this.setState({ value: '' });
        };
        handleClick = () => {
        this.manualFocusInst.focus();
        }
    
    render() {
        return (
            <div>
                <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} style={{zIndex:'999',position:'relative'}}/>    
                <Topic style={{position:'absolute',top:'0px'}}/>
                <Grid data={data} hasLine={false} columnNum={5}/>
                <img src={require("../img/9.png")} style={{width:'100%'}}/>
            </div>
        )
    }
}