/**
 * Created by du on 16/10/23.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var top = {
    background: "rgb(0, 188, 212)",
    textAlign: "center",
    padding: 40,
    color: "rgba(255, 255, 255,.9)",
}
export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    onClick(s){
        location.hash=s
    }
    render() {
        return (
            <div className="container-fluid home">
                <div style={top}>
                    <img src="neat.png" style={{width:200}}/>
                    <div style={{fontSize:50,marginBottom:50,marginTop:-30,marginLeft:40}}>Neat.js</div>
                    <div >追求极致优雅、简洁、高效的, 专为现代浏览器, 移动端端优先的 Javascript 库 !</div>
                    <RaisedButton label="下载" labelStyle={{color:"rgb(0, 188, 212)"}} style={{marginTop:20}}
                                  href="https://github.com/wendux/Neat/dist"/>
                </div>
                <div className="container-fluid gray-block">
                    <div className="row">
                        <div className="col-md-8 col-xs-11 center-block">
                            Neat [ni:t] adj. 灵巧的， 整洁的，干净的。 Neat用jQuery 10%的代码量实现了其80%的功能，GZIP后不足4K，兼容大多数jQuery Api。Neat支持实现了ES5的浏览器,
                            完全支持移动端(IOS、Android)浏览器， 秉持移动端优先原则 , 支持Touch事件，同时桌面浏览器支持IE9+。Neat核心由 事件处理、AJAX、DOM操作、动画、Promise/Deferred五大模块组成, 并兼容jQuery插件系统,
                            大多数jQuery插件可以无修改或只需少量修改就可以移植到Neat上， 有着极强的扩展性。 小巧、灵活、高效、优雅是Neat的主要特点,
                            你完全可以将Neat和Vue等库结合使用。随着你对Neat的深入了解，我相信你会喜欢上它的。 Enjoy it !
                        </div>
                    </div>
                </div>
                <div className="feature-block">
                    <div className="row">
                        <div className="col-md-9 center-block">
                            <div className="col-md-4 col-xs-12  "  onClick={this.onClick.bind(this,"neat-project-readme")}>
                                <div className="box">
                                    <div className="title">项目介绍</div>
                                    <img src="get-started.svg"/>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12  " onClick={this.onClick.bind(this,"neat-get-start")} >
                                <div className="box">
                                    <div className="title">查看文档</div>
                                    <img src="css-framework.svg"/>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12  " onClick={this.onClick.bind(this,"Neat-vs-jQuery-vs-Zepto")}>
                                <div className="box">
                                <div className="title">Vs jQuery/Zepto</div>
                                <img src="components.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid gray-block">
                    <div className="row">
                        <div className="col-md-6 col-xs-10 center-block" style={{textAlign:"center"}}>
                            <div> Want to help make Neat awesome? Check out our repo</div>
                            <RaisedButton label="github" primary={true} style={{marginTop:20}}
                                          href="https://github.com/wendux/Neat"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}