import React from 'react'
import CustomInput from '../../../Components/CustomeInput'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from '../../../boot/axios'
import { toast } from '../../../methods'
import useSetToken from '../../../hooks/useSetToken'

const Signin = () => {
    const setToken = useSetToken()
    const navigate = useNavigate()
    const {
        handleSubmit,
        control,
        register,
        reset,
        setValue
    } = useForm()
    const onsubmit = (data) => {
        const url = "/auth/signin"
        axios.post(url, data).then(({ data }) => {
            console.log(data)
            const token = data?.token
            const role = data?.role
            setToken({token , role})
            toast({ text: data?.message })
            navigate("/user/profile")
            reset()
        })
    }
    return (
        <form className="p-4 w-full" onSubmit={handleSubmit(onsubmit)}>
            <p className="text-center font-bold my-8">ورود</p>
            <p className='font-thin text-sm text-center'>حساب کاربری ندارم! <Link className='font-medium text-blue-400' to="/auth/signup">ثبت نام</Link></p>
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
            <div className=" my-4">
                <Button htmlType="submit" className="w-full" type='primary'>ورود</Button>
            </div>
            <div className="flex justify-end">
                <Link className="text-sm text-blue-300 flex items-center" to="/" >بازگشت <IoIosArrowRoundBack className='mt-1' size={20}/> </Link>
            </div>
        </form>
    )
}

export default Signin