import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import CustomInput from '../../../Components/CustomeInput';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../boot/axios'
import { toast } from '../../../methods';
import FileInput from '../../../Components/fileUploader/FileInput';
import CustomTextarea from '../../../Components/CustomeTextarea';
import SelectInput from '../../../Components/Select-input/SelectInput';

const Course = () => {
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
        formData.set("description", data?.description)
        formData.set("price", data?.price)
        formData.set("teacher", data?.teacher)
        formData.set("time", data?.time)
        formData.set("available", data?.available)
        formData.append("image", data?.image)
        let headers = {
            'Content-Type': 'multipart/form-data'
        }
        const url = "/admin/course"
        axios.post(url, formData, { headers }).then(({ data }) => {
            toast({ text: data?.message })
            reset()
            setValue("image", "")
        })
    }
    const options = [
        { label: "بله", value: true },
        { label: "خیر", value: false },

    ]
    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 gap-4 p-2">
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="نام"
                        name="title"
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
                        label="نام استاد"
                        name="teacher"
                        control={control}
                        placeholder='نام استاد را وارد کنید'
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CustomInput
                        label="مدت دوره "
                        name="time"
                        control={control}
                        placeholder='مدت دوره  را وارد کنید'
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <Controller
                        name="available"
                        control={control}
                        render={({ onChange, value, ref, field }) => (
                            <SelectInput
                                {...field}
                                label="در دسترس"
                                register={register}
                                name="available"
                                placeholder="گزینه موردنظر را انتخاب کنید"
                                options={options}
                                value={options.find((c) => c.value === value)}
                                onChange={(e) => setValue("available", e.value)}
                            />
                        )}
                    // rules={{ required: true }}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <FileInput setValue={setValue} label="عکس" register={register} name="image" />
                </div>
                <div className="col-span-2">
                    <CustomTextarea
                        label="توضیحات "
                        name="description"
                        control={control}
                        placeholder='توضیحات  را وارد کنید'
                    />
                </div>
                <div className="col-span-2 flex justify-center">
                    <Button htmlType="submit" className="mx-auto" type='primary'>ثبت</Button>
                </div>
            </form>
        </div>
    )
}

export default Course