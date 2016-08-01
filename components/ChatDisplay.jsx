var React = require('react');
var PropTypes = React.PropTypes;

var ChatDisplay = React.createClass({
    render: function() {
        return (<textarea disabled rows={15} style={{
            resize: 'none'
        }} className="form-control" id="chat-list"/> < br />);
    }
});

module.exports = ChatDisplay;
