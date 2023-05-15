import { useState } from "react";
import DatePicker from "react-datepicker";
import "./Form.scss";

//interface IForm {
//    name: string;
//    id: string;
//    Date: string;
//    phone: string;
//}

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="background">
            <div className="FormContainer">
                <div className="FormBack">
                    <form className="Form">
                        <h1 className="FormTitle">정보 입력</h1>
                        <hr className="FormHr"></hr>
                        <div className="InputContainer">
                            <h3 className="InputIdx">ID</h3>
                            <input
                                className="Input"
                                type="text"
                                //value={id}
                            ></input>
                            <h3 className="InputIdx">휴대전화</h3>
                            <input
                                placeholder="'-' 없이 입력"
                                className="Input"
                                type="text"
                                //value={phone}
                            ></input>
                            <h3 className="InputIdx">공연 날짜</h3>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </form>
                </div>
                <button className="Submit">제출</button>
            </div>
        </div>
    );
};

export default Form;
