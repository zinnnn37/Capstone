import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "./Form.scss";

//interface IForm {
//    name: string;
//    id: string;
//    Date: string;
//    phone: string;
//}

//type FormValues = {
//    ReactDatepicker: string,
//};

const Form = () => {
    const { register, handleSubmit, control } = useForm();

    //const onSubmit = (event) => {
    //    // 폼 전송 핸들러
    //    event.preventDefault();
    //    alert("전송 완료");
    //};

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
                            <Controller
                                control={control}
                                name="date"
                                render={({ field: { onChange, value } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        selected={value}
                                        dateFormat="yyyy.MM.dd."
                                        maxDate={new Date()}
                                        placeholderText="공연 날짜 선택"
                                    />
                                )}
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
