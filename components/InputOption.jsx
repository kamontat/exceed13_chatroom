var React = require('react');

var InputOption = React.createClass({
    render: function() {
        return (
            <div className="col-xs-12 col-md-12 col-lg-10">
                <div className="input-group">
                    <input id="message" type="text" className="form-control" placeholder="texting message..."/>
                    <span className="input-group-btn">
                        <button id="btn-sent" className="btn btn-success" type="button">SEND!</button>
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = InputOption;
