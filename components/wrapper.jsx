var ReactDOM = require("react-dom");

var currentMessage = "";
var defaultURL = "http://10.32.176.4/";
var currentGroup = "workshop/";

module.exports = React.createClass({
    getInitialState: function() {
        var self = this;

        setInterval(function() {
            // do something to the server
            $.ajax({
                url: defaultURL + currentGroup
                // run this, only if download from server is success
            }).done(function(data) {
                if (data != currentMessage) {
                    var oldChat = self.state.message;
                    var newChat = oldChat + "\n" + data;
                    self.setState({message: newChat});

                    currentMessage = data;
                }
            });
        }, 1000);

        return {message: "hello world"};
    },

    sendMessage: function(event) {
        if (event.key == "ENTER") {
            var message = input.val();
            $.ajax({
                url: defaultURL + currentGroup + currentName + ": " + message
            });
        }
    },

    render: function() {
        var GroupOption = require('./groupOption.jsx');
        var InputOption = require('./InputOption.jsx');
        var ChatDisplay = require('./ChatDisplay.jsx');

        return (
            <div className="panel panel-primary">
                {/* Header */}
                <div id="chatroomName" className="panel-heading">Exceed software chatroom</div>
                {/* Body */}
                <div className="panel-body">
                    <GroupOption/>

                    <ChatDisplay message={this.state.message}/>

                    <InputOption/>
                </div>
            </div>
        );
    }
});

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
    <Wrapper/>, document.getElementById("container"));
