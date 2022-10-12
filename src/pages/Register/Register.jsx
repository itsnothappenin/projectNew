import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import concert from "./concert3.jpg"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("")
    const [surname, setsurName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/users/register", {
            firstName: name,
            lastName: surname,
            email: email,
            phone: phone,
            password: password,
        }).then(res => {
            console.log(res)
            toast.success("user Created !")
            navigate("/") 
        })
    }
    return (
        <>
            <div className="regPage">
                <div className="part1-reg">
                <Link to="/"><button></button></Link>
                    <form className='form'>
                        <h1>Join us now!</h1>
                        <div className="names">
                            <div className='firstName'>
                                <label className='littletext' htmlFor="firstName">First Name</label>
                                <input required type="text" className='area' name="firstName" placeholder="First Name" onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            </div>
                            <div className='lastName'>
                                <label className='littletext' htmlFor="lastName">Last Name</label>
                                <input required type="text" className='area' name="lastName" placeholder="Last Name" onChange={(e) => {
                                    setsurName(e.target.value)
                                }} />
                            </div>

                        </div>
                        <label className='littletext' htmlFor="email">Email</label>
                        <input required type="email" className='area' name="email" placeholder="Your email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <label className='littletext' htmlFor="phone">Phone number</label>
                        <input required type="text" className='area' name="phone" placeholder="Your number" onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                        <label className='littletext' htmlFor="password">Password</label>
                        <input required type="password" className='area' name="password" placeholder="Your password" onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <label className='littletext' htmlFor="password">Confirm Password</label>
                        <input required type="password" className='area' name="password" placeholder="Retype password" onChange={(e) => {
                            setConfirm(e.target.value)
                        }} />
                        <button className="signUp" onClick={handleRegister}>Sign up</button>
                        <div className='formBottom'>
                            <p>Already have an account?</p>
                            <Link className='highlight' to="/login">Sign in!</Link>
                        </div>
                    </form>
                </div>
                <div className="part2-reg">
                    <div className='image'>
                        <img src={concert} />
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Register