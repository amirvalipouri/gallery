import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import CustomInput from '../../../Components/CustomeInput';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../boot/axios'
import { toast } from '../../../methods';
import FileInput from '../../../Components/fileUploader/FileInput';
import CustomTextarea from '../../../Components/CustomeTextarea';

const AdminCamera = () => {
    const {
        handleSubmit,
        control,
        register,
        reset,
        setValue
    } = useForm()
    const onsubmit = (data) => {
        console.log(data)
        const formData = new FormData()
        formData.set("name", data?.name)
        formData.set("code", data?.code)
        formData.set("price", data?.price)
        formData.set("weight", data?.weight)
        formData.set("desc", data?.desc)
        formData.set("resolution", data?.resolution)
        formData.append("image", data?.image)
        let headers = {
            'Content-Type': 'multipart/form-data'
        }
        const url = "/admin/camera"
        axios.post(url,formData,{headers}).then(({data})=>{
            toast({text : data?.message})
            reset()
            setValue("image" , "")
        })
    }
    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 gap-4 p-2">
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="نام"
                        name="name"
                        control={control}
                        placeholder='نام را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="قیمت"
                        name="price"
                        control={control}
                        placeholder='قیمت را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="کد"
                        name="code"
                        control={control}
                        placeholder='کد را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="وزن"
                        name="weight"
                        control={control}
                        placeholder='وزن را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="رزولوشن "
                        name="resolution"
                        control={control}
                        placeholder='رزولوشن  را وارد کنید'
                    />
                </div>
                <div className="col-span-2">
                    <CustomTextarea
                        label="توضیحات "
                        name="desc"
                        control={control}
                        placeholder='توضیحات  را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <FileInput setValue={setValue} label="عکس" register={register} name="image" />
                </div>
                <div className="col-span-2 flex justify-center">
                    <Button htmlType="submit" className="mx-auto" type='primary'>ثبت</Button>
                </div>
            </form>
        </div>
    )
}

export default AdminCamera