import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import CustomInput from '../../../Components/CustomeInput';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../boot/axios'
import { toast } from '../../../methods';
import FileInput from '../../../Components/fileUploader/FileInput';
const CategoryAdmin = () => {
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
        formData.set("title", data?.title)
        formData.append("image", data?.image)
        let headers = {
            'Content-Type': 'multipart/form-data'
        }
        const url = "/admin/category"
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
                        label="موضوع"
                        name="title"
                        control={control}
                        placeholder='موضوع را وارد کنید'
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
export default CategoryAdmin