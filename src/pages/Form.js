import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./Form.scss";

const Form = () => {
    const [date, setStartDate] = useState(new Date());

    const [data, setInputs] = useState({
        id: "",
        phone: "",
        date: "",
    });

    const handleValue = (e) => {
        const { id, value } = e.target;
        setInputs({
            ...data,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        data["date"] = e.target.date.value;
        console.log(data);
        console.log(JSON.stringify(data));
        if (
            window.confirm(
                "id: " +
                    data["id"] +
                    "\n휴대전화: " +
                    data["phone"] +
                    "\n공연 날짜: " +
                    data["date"] +
                    "\n\n재입력은 불가능합니다. 제출하시겠습니까?"
            ) === false
        )
            return;
        alert("제출되었습니다.");
        // eslint-disable-next-line no-restricted-globals
        window.location.replace("https://festiver.co/");
    };

    return (
        <div className="background">
            <div className="FormContainer">
                <div className="FormBack">
                    <form className="Form" id="form" onSubmit={handleSubmit}>
                        {/*onSubmit={(e) => handleSubmit(e)} ?*/}
                        <h1 className="FormTitle">정보 입력</h1>
                        <hr className="FormHr"></hr>
                        <div className="InputContainer">
                            <h3 className="InputIdx">ID</h3>
                            <input
                                className="Input"
                                id="id"
                                type="text"
                                onChange={handleValue}
                            ></input>
                            <h3 className="InputIdx">휴대전화</h3>
                            <input
                                placeholder="'-' 없이 입력"
                                className="Input"
                                id="phone"
                                type="text"
                                onChange={handleValue}
                            ></input>
                            <h3 className="InputIdx">공연 날짜</h3>
                            <ReactDatePicker
                                onChange={(date) => setStartDate(date)}
                                selected={date}
                                id="date"
                                dateFormat="yyyy.MM.dd."
                                maxDate={new Date()}
                                placeholderText="공연 날짜 선택"
                                onFocus={(e) => e.target.blur()}
                            />
                        </div>
                    </form>
                </div>
                <button type="submit" className="Submit" form="form">
                    제출
                </button>
            </div>
        </div>
    );
};

export default Form;
