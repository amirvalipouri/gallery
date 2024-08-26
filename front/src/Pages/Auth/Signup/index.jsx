import React from 'react'
import CustomInput from '../../../Components/CustomeInput'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from '../../../boot/axios'
import { toast } from '../../../methods'
const Signup = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        control,
        register,
        reset,
        setValue
    } = useForm()
    const onsubmit = (data) => {
        const url = "/auth/signup"
        axios.post(url, data).then(({ data }) => {
            toast({ text: data?.message })
            reset()
            navigate("/auth/signin")

        })
    }
    return (
        <form className="p-4 w-full" onSubmit={handleSubmit(onsubmit)}>
            <p className="text-center font-bold my-8">ثبت نام</p>
            <div className='my-4'>
                <CustomInput
                    name="phone"
                    label="شماره تلفن"
                    control={control}
                    placeholder='َشماره تلفن را وارد کنید'
                />
            </div>
            <div className='my-4'>
                <CustomInput
                    name="password"
                    label="رمزعبور"
                    control={control}
                    placeholder=' رمزعبور را وارد کنید'
                />
            </div>
            <div className='my-4'>
                <CustomInput
                    name="firstName"
                    label="نام"
                    control={control}
                    placeholder=' نام را وارد کنید'
                />
            </div>
            <div className='my-4'>
                <CustomInput
                    name="lastName"
                    label="نام کاربری"
                    control={control}
                    placeholder='نام خانوادگی را وارد کنید'
                />
            </div>
            <div className=" my-4">
                <Button htmlType="submit" className="w-full" type='primary'>ورود</Button>
            </div>
            <div className="flex justify-end">
                <Link className="text-sm text-blue-300 flex items-center" to="/auth/signin" > بازگشت به ورود <IoIosArrowRoundBack className='mt-1' size={20} /> </Link>
            </div>
        </form>
    )
}

export default Signup