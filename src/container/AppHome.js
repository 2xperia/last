import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
export default class Start extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        }
        componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        }
        //<NavBar mode="dark" style={{backgroundcolor:"#3fcccb"}}>NavBar</NavBar>
        state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
          componentDidMount() {
            // simulate img loading
            setTimeout(() => {
              this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
              });
            }, 100);
          }
          render() {
            return (
              <WingBlank style={{width:'100%',marginLeft:'0px'}}>
                <Carousel
                  autoplay={true}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                  
                >
                  {this.state.data.map(val => (
                      <img
                        src={require("../img/2.png")}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                  ))}
                </Carousel>
              </WingBlank>

            );
          }
}
