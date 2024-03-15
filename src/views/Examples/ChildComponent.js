import React from "react";

class ChildComponent extends React.Component {
    render() {
        console.log(">>> Check props: ", this.props);
        let { arrInformation } = this.props;
        return (
            <>
                <div className="jobList">
                    {arrInformation.map((item) => {
                        if (+item.salary >= 500) {
                            return (
                                <div key={item.id}>
                                    {item.Job} - {item.salary}
                                </div>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}

export default ChildComponent;
