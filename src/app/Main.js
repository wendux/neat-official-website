/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NeatDrawer from './NeatDrawer'
import Home from "./home"
import Touch from "./touch"
import MarkdownContent from "./MarkdownContent"
import IconButton from "material-ui/IconButton"

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
const github="https://github.com/wendux/Neat"
const responsive = {};
responsive.MOBILE = 'xs';
responsive.TABLET = 'sm';
responsive.LAPTOP = 'md';
responsive.DESKTOP = 'lg';
var indexes = [
    responsive.MOBILE,
    responsive.TABLET,
    responsive.LAPTOP,
    responsive.DESKTOP,
];
var breakpoints = [0, 768, 992, 1200, Infinity];

function getSize() {
    // http://stackoverflow.com/a/11744120/808657
    var w = window;
    var d = w.document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var x = w.innerWidth || e.clientWidth || g.clientWidth;
    var y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {width: x, height: y};
}

function getType(size) {
    var breakpoint = breakpoints.filter(function (b) {
        return size >= b;
    });
    var i = breakpoints.indexOf(breakpoint.pop());
    return indexes[i];
};
var routeMap = {
    "/": <Home />,
    "neat-get-start":"neat-get-start",
    "neat-event": "neat-event",
    "neat-dom-api":"neat-dom-api",
    "neat-selector":"neat-selector",
    "neat-ajax":"neat-ajax",
    "neat-touch":"neat-touch",
    "neat-animate":"neat-animate",
    "neat-static-methods":"neat-static-methods",
    "neat-promise-deferred":"neat-promise-deferred",
    "neat-plugin":"neat-plugin",
    "neat-project-readme":"neat-project-readme",
    "Neat-vs-jQuery-vs-Zepto":"Neat-vs-jQuery-vs-Zepto"
}
class Main extends Component {
    constructor(props, context) {
        super(props, context);
        var isPc = getType(getSize().width) != responsive.MOBILE;
        var route = this.parseRoute()
        this.state = {
            isHome: route == "/",
            isPc,
            open: false,
            docked: false,
            route: route,
            style: {}
        };
    }


    onDrawerTitleTap = () => {
        this.setState({isHome: true, open: false}, e=> {
            this.updateUI();
        })
        location.hash = "";
    }
    drawerRequestChange = (open)=> {
        this.setState({open})
    }

    updateUI = ()=> {
        var isPc = getType(getSize().width) != responsive.MOBILE;
        var showType = {
            docked: false,
            style: {
                padding: 0,
            }
        };
        if (isPc && !this.state.isHome) {
            showType.docked = true;
            showType.open = true;
            showType.style = {
                paddingLeft: 250
            }
        }
        if (this.state.isHome) {
            showType.open = false;
        }
        this.setState(showType);
    }

    openToggle = ()=> {
        this.setState({open: !this.state.open});
    }

    open(url) {
        location.href = url;
    }

    onMenuItemClick(i) {
        var open = false;
        if (this.state.isPc) {
            open = true
        }
        this.setState({isHome: this.state.route == "/", open}, e=> {
            this.updateUI();
            var t=parseInt($("html").css("height"))
            window.scrollTo(0,0)
        });
    }
    parseRoute() {
        var h = "/";
        var hash = location.hash
        if (hash) {
            h = hash.substr(1);
        }
        if (!routeMap[h]) {
            h = "/"
        }
        return h;
    }

    componentDidMount() {
        this.updateUI();
        window.addEventListener('resize', () => {
            this.updateUI();
        }, true);
        //window.addEventListener('orientationchange', () => {
        //    this.currentWidth = getSize().width;
        //}, true);
        window.addEventListener('hashchange', () => {
            var path = this.parseRoute();
            this.setState({route: path, isHome: path == "/"}, e=>this.updateUI())
        })
    }

    render() {
        let Content = routeMap[this.state.route];
        if (typeof Content == "string") {
            Content = <MarkdownContent url={Content+".md"}/>
        }
        var appBarStyle = this.state.isHome ? {boxShadow: "none"} : {};
        appBarStyle.position = "fixed";
        var contentStyle= this.state.isHome?{padding:0}:{};
        contentStyle.minHeight=getSize().height-250;
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Neat.js"
                        open={true}
                        docked={false}
                        style={appBarStyle}
                        iconClassNameRight="muidocs-icon-custom-github"
                        onLeftIconButtonTouchTap={this.openToggle}
                        onRightIconButtonTouchTap={this.open.bind(this,github)}
                    />
                    <NeatDrawer open={this.state.open} docked={this.state.docked}
                                onRequestChange={this.drawerRequestChange}
                                onDrawerTitleTap={this.onDrawerTitleTap}
                                onItemClick={this.onMenuItemClick.bind(this)}
                    />
                    <div className="body">
                        <div style={this.state.style}>
                            <div className="content" style={contentStyle}>
                                {Content}
                            </div>
                            <div className="footer">
                                <div>Powered by  Neat.js, Thanks for all contributors.</div>
                                <div style={{fontSize:.8,marginTop:10}}>This website is  created by  duwen, 2016.11</div>
                                <IconButton iconClassName="muidocs-icon-custom-github"
                                            href={github}
                                            iconStyle={{color:"#fff"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
