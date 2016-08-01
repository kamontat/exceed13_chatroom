var GroupOption = React.createClass({
    render: function() {
        return (
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <button id="btn-createGroup" type="button" className="btn btn-warning">
                        Create Group
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button id="btn-toGroup" type="button" className="btn btn-info">
                        To Group
                    </button>
                </div>
            </div>
        );
    }
});
module.exports = GroupOption;
