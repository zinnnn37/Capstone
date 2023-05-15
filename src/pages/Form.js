import { useState } from "react";
import { useForm } from "react-hook-form";
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
    const { register, handleSubmit } = useForm();

    return (
        <div className="background">
            <div className="FormContainer">
                <div className="FormBack">
                    <form
                        className="Form"
                        id="form"
                        onSubmit={handleSubmit(
                            (data) => alert(JSON.stringify(data)) // 데이터 서버로 전달하는 함수
                        )}
                    >
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
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                //{...register("Date", { required: true })}
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
