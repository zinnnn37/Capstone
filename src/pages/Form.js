import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "./Form.scss";

const Form = () => {
    const { register } = useForm();
    const [date, setStartDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            id: e.target.id.value,
            phone: e.target.phone.value,
            date: JSON.stringify(e.target.date.value),
        });
        alert("제출되었습니다.");
        // eslint-disable-next-line no-restricted-globals
        window.location.replace("https://festiver.co/");
    };

    return (
        <div className="background">
            <div className="FormContainer">
                <div className="FormBack">
                    <form className="Form" id="form" onSubmit={handleSubmit}>
                        <h1 className="FormTitle">정보 입력</h1>
                        <hr className="FormHr"></hr>
                        <div className="InputContainer">
                            <h3 className="InputIdx">ID</h3>
                            <input
                                className="Input"
                                id="id"
                                type="text"
                                {...register("id", {
                                    required: true,
                                    minLength: 1,
                                })}
                            ></input>
                            <h3 className="InputIdx">휴대전화</h3>
                            <input
                                placeholder="'-' 없이 입력"
                                className="Input"
                                id="phone"
                                type="text"
                                {...register("phone", {
                                    required: true,
                                    minLength: 11,
                                    maxLength: 11,
                                })}
                            ></input>
                            <h3 className="InputIdx">공연 날짜</h3>
                            {/*<Controller
                                control={control}
                                name="date"
                                render={({ field: { onChange, date } }) => (*/}
                            <ReactDatePicker
                                onChange={(date: Date) => setStartDate(date)}
                                selected={date}
                                id="date"
                                dateFormat="yyyy.MM.dd."
                                maxDate={new Date()}
                                //placeholderText="공연 날짜 선택"
                            />
                            {/*)}
                            />*/}
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
