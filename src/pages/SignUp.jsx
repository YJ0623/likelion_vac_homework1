import React,{useState,} from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SignUp = () => {
    const navigate=useNavigate();
        
    //이름, 전화번호, 이메일, 생일, 비밀번호 확인
    const [form, setForm] = useState({
        name:'',
        phone:'',
        email:'',
        birthday:'',
        password:'',
    });

    //오류메시지 상태저장
    const [emailMessage, setEmailMessage] = useState(""); 
    const [phoneMessage, setPhoneMessage] = useState("");
    //유효성검사 
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // 전화번호 유효성 검사
        if (name === "phone") {
            const phoneRegex = /^(01[016789])[-]?[0-9]{3,4}[-]?[0-9]{4}$/;
            if (!phoneRegex.test(value)) {
                setPhoneMessage("전화번호 형식이 틀렸어요! 다시 확인해주세요");
                setIsPhoneValid(false);
            } else {
                setPhoneMessage("올바른 전화번호 형식이에요 :)");
                setIsPhoneValid(true);
            }
        }
        // 이메일 유효성 검사 
        if (name === "email") {
            const emailRegex =
                /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (!emailRegex.test(value)) {
                setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요");
                setIsEmailValid(false);
            } else {
                setEmailMessage("올바른 이메일 형식이에요 :)");
                setIsEmailValid(true);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid && isEmailValid && isPhoneValid) {
            swal("회원가입 완료!");
            navigate("/");
        }
    };

    const isValid = Object.values(form).every((value) => value.trim() !== "");
    
    return(
        <div className="min-h-screen bg-blue-100  flex items-center justify-center px-4">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4 ph:max-w-sm dt:max-w-xl ">
            <h1 className= "text-center font-inter font-bold">Sign Up</h1>

            <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            />
            <div className="flex flex-col">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                />
                {form.phone.length > 0 && (
                    <span className={`text-sm mt-1 ${isPhoneValid ? 'text-green-500' : 'text-red-500'}`}>
                        {phoneMessage}
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                />
                {form.email.length > 0 && (
                    <span className={`text-sm mt-1 ${isEmailValid ? 'text-green-500' : 'text-red-500'}`}>
                        {emailMessage}
                    </span>
                )}
            </div>

            <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            />       
            <button
            disabled={!isValid&&isEmailValid&&isPhoneValid}
            className={`py-2 px-4 rounded-[6px] font-medium transition text-white
                ${isValid && isEmailValid&&isPhoneValid
                ? 'bg-[#4F46E5] hover:bg-blue-600 cursor-pointer' 
                : 'bg-gray-400'}`}
            >Sign Up</button>
        </form>
        </div>
    )
}

export default SignUp;