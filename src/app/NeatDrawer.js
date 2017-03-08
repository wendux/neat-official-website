/**
 * Created by du on 16/10/23.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class NeatDrawer extends React.Component {
    constructor(props) {
        super(props);
    }
    onItemClick(args){
        this.props.onItemClick(args);
        location.hash=args;
    }
    render() {
        return (
            <div>
                <Drawer width={250} open={this.props.open} docked={this.props.docked}
                        onRequestChange={this.props.onRequestChange}>
                    <AppBar title="Neat.js"
                            onTitleTouchTap={this.props.onDrawerTitleTap}
                            iconStyleLeft={{display:"none"}}/>

                    <List>
                        <ListItem primaryText="首页"
                                  onTouchTap={this.onItemClick.bind(this,"")}
                        />
                        <ListItem primaryText="开始"
                                  onTouchTap={this.onItemClick.bind(this,"neat-get-start")}/>
                        <ListItem primaryText="选择器"
                                  onTouchTap={this.onItemClick.bind(this,"neat-selector")}
                                  />
                        <ListItem primaryText="DOM API"
                                  onTouchTap={this.onItemClick.bind(this,"neat-dom-api")}
                        />
                        <ListItem
                            primaryText="事件"
                            primaryTogglesNestedList={true}
                            nestedItems={[
                            <ListItem
                              key="1"
                              primaryText="事件处理"
                              onTouchTap={this.onItemClick.bind(this,"neat-event")}
                            />,
                            <ListItem
                              key="2"
                              primaryText="Touch事件"
                              onClick={this.onItemClick.bind(this,"neat-touch")}
                            />

                         ]}/>
                        <ListItem primaryText="动画"
                                  onTouchTap={this.onItemClick.bind(this,"neat-animate")}
                        />
                        <ListItem primaryText="AJAX"
                                  onTouchTap={this.onItemClick.bind(this,"neat-ajax")}
                        />
                        <ListItem primaryText="Promise/Deferred"
                                  onTouchTap={this.onItemClick.bind(this,"neat-promise-deferred")}
                        />
                        <ListItem primaryText="工具函数"
                                  onTouchTap={this.onItemClick.bind(this,"neat-static-methods")}
                        />
                        <ListItem primaryText="插件"
                                  onTouchTap={this.onItemClick.bind(this,"neat-plugin")}
                        />
                        <ListItem
                            primaryText="其它"
                            primaryTogglesNestedList={true}
                            nestedItems={[
                            <ListItem
                              key="1"
                              primaryText="项目说明"
                              onTouchTap={this.onItemClick.bind(this,"neat-project-readme")}
                            />,
                            <ListItem
                              key="2"
                              primaryText="Neat vs jQuery/Zepto"
                              onClick={this.onItemClick.bind(this,"Neat-vs-jQuery-vs-Zepto")}
                            />

                         ]}/>
                    </List>
                </Drawer>
            </div>
        );
    }
}