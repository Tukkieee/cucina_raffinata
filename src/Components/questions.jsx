import { FaMinus, FaPlus, FaArrowRight} from "react-icons/fa6";

export const Questions = (props) => {


    return (
        <>
            <div className="question-content">
                <div className="container">
                    <div className="question-toggle">
                        <h5>{props.q1}</h5>
                        <div className="icon" onClick={props.toggleContent3}>
                            {props.h2?<FaArrowRight/>:props.showContent3 ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    <p>{props.h1 ===""?"":props.h1}</p>
                    {props.showContent3 && (
                        <div className="extra-content">
                            <p>{props.p1}</p>
                        </div>
                    )}
                </div>
                <div className="container second-child">
                <div  className="question-toggle">
                    <h5>{props.q2}</h5>
                    <div className="icon" onClick={props.toggleContent1}>
                    {props.h2?<FaArrowRight/>:props.showContent1?<FaMinus />:<FaPlus/>}
                    </div>
                </div>
                {props.h2 ===""?"":props.h2}
                {props.showContent1 && (
                    <div className="extra-content">
                        <p>{props.p2}</p>
                    </div>
                )}
                </div>
                <div className="container">
                <div  className="question-toggle">
                    <h5>{props.q3}</h5>
                    <div className="icon" onClick={props.toggleContent2}>
                    {props.h2?<FaArrowRight/>:props.showContent2?<FaMinus />:<FaPlus/>}
                    </div>
                </div>
                {props.h3 ===""?"":props.h3}
                {props.showContent2 && (
                    <div className="extra-content">
                        <p>{props.p3}</p>
                    </div>
                )}
            </div>
            
            
            </div>
        </>
    )
}