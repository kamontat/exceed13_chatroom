var React = require("react");
var ReactDOM = require("react-dom");

module.exports = React.createClass({
    render: function() {
        var GroupOption = require('./groupOption.jsx');
        var InputOption = require('./InputOption.jsx');
        var ChatDisplay = require('./ChatDisplay.jsx');

        return (
            <div className="panel panel-primary">
                {/* heading */}
                <div id="chatroomName" className="panel-heading">Exceed software chatroom</div>
                <div className="panel-body">
                    <GroupOption/>
                    <ChatDisplay/>
                    <InputOption/>
                </div>
            </div>
        );
    }
});

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
    <Wrapper/>, document.getElementById("container"));
