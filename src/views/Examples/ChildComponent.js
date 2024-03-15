import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false,
    };

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob,
        });
    };

    render() {
        let { arrInformation } = this.props;
        let { showJob } = this.state;

        return (
            <React.Fragment>
                {showJob === false ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="listJob">
                            {arrInformation.map((item, index) => {
                                if (+item.salary >= 500) {
                                    return (
                                        <div key={item.id}>
                                            <h3>
                                                {item.Job}
                                                <span> - </span>
                                                {item.salary}
                                            </h3>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default ChildComponent;
