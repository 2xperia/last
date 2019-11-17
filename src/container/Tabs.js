import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Start from  './Start'
const tabs = [
    { title: <Badge text={''}>推荐</Badge> },
    { title: <Badge text={''}>冬季</Badge> },
    { title: <Badge >宜家</Badge> },
    { title: <Badge >小清新</Badge> },
    { title: <Badge >小户型</Badge> },
    { title: <Badge >个性色彩</Badge> },
    
  ];

export default class About extends Component {
    render() {
        return (
            <div>
            <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <Start/>
                </div>
            </Tabs>
            </div>
        );

            
    }
}