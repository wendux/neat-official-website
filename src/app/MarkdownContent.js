/**
 * Created by du on 16/10/23.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress'
marked.setOptions({
    breaks: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

function addRowNo(data) {
    var t = neat('<div></div>').html(data);
    t.find("pre code").each(function () {
        var lines = $(this).text().split('\n').length - 1;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);

        for (var i = 0; i <= lines; i++) {
            $numbering.append($('<li/>').text(i+1));
        }
    })
    return t.html()
}
export default class MarkdownContent extends React.Component {

    static cache = {};

    constructor(props) {
        super(props);
        this.renderring = false;
        this.state = {content: "loading..."};
    }

    render() {
        let url = this.props.url;
        var content = MarkdownContent.cache[url];
        if (!content) {
            if (!this.renderring) {
                this.renderring = true;
                this.state.progress=0;
                $.get(url).done(data=> {
                    content = marked(data, (t, b)=> {
                        return addRowNo(b)
                    })
                    MarkdownContent.cache[url] = content;
                   // progress:100
                    this.setState({content})
                    this.renderring = false;
                }).fail((e)=> {
                    this.renderring = false;
                })
                //    .progress((pe)=>{
                //    if(pe.lengthComputable) {
                //        var progress= pe.loaded/pe.total*100;
                //        setTimeout(()=>{this.setState({progress:progress})},200)
                //    }
                //})
            }
        } else {
            this.state.content = content;
        }
        return (
            <div className={"container-fluid markdown "+(this.props.className||"") }>
                {/*<LinearProgress mode="determinate" style={{display:this.state.progress==100?"none":"block"}}  value={this.state.progress}/>*/}
                <div
                     style={this.props.style}
                     dangerouslySetInnerHTML={{__html:this.state.content}}>
                </div>
           </div>
        );
    }
}