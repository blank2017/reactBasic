import React from "react";

// class ChildComponent extends React.Component {
//     render() {
//         console.log(">>> Check props: ", this.props);
//         let { name, age, arrInformation } = this.props;
//         return (
//             <>
//                 <h1>
//                     Child Component: {name} - {age}
//                 </h1>

//                 <div className="jobList">
//                     {arrInformation.map((item) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.Job} - {item.salary}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </>
//         );
//     }
// }

const ChildComponent = (props) => {
    let { name, age, arrInformation } = props;
            return (
                <>
                    <h1>
                        Child Component: {name} - {age}
                    </h1>
    
                    <div className="jobList">
                        {arrInformation.map((item) => {
                            return (
                                <div key={item.id}>
                                    {item.Job} - {item.salary}
                                </div>
                            );
                        })}
                    </div>
                </>
            );
};
export default ChildComponent;
