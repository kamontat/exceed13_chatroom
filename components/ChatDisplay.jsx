var ChatDisplay = React.createClass({
    render: function() {
        return (
            <div>
                <textarea disabled rows={15} style={{
                    resize: 'none'
                }} className="form-control" id="chat-list"/>
                <br/>
            </div>
        );
    }
});

module.exports = ChatDisplay;
