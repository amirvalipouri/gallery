import React, { useEffect } from 'react'
import { Button } from 'antd';
import CustomInput from '../../../Components/CustomeInput';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../boot/axios'
import { toast } from '../../../methods';
import FileInput from '../../../Components/fileUploader/FileInput';
import SelectInput from '../../../Components/Select-input/SelectInput';
import useGetCats from '../../../hooks/useGetCategories';

const Image = () => {
    const [cat , getCat] = useGetCats()
    const {
        handleSubmit,
        control,
        register,
        reset,
        setValue,
        formState: { errors },
    } = useForm()
    const onsubmit = (data) => {
        console.log(data)
        const formData = new FormData()
        formData.append("image", data?.image)
        formData.set("category",data?.category)
        let headers = {
            'Content-Type': 'multipart/form-data'
        }
        const url = "/admin/image"
        axios.post(url, formData, { headers }).then(({ data }) => {
            toast({ text: data?.message })
            reset()
            setValue("image", "")
        })
    }
    useEffect(getCat,[])
    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 gap-4 p-2">
                <div className="col-span-2 lg:col-span-1">
                    <FileInput setValue={setValue} label="عکس" register={register} name="image" />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <Controller
                        name="category"
                        control={control}
                        render={({ onChange, value, ref, field }) => (
                            <SelectInput
                                {...field}
                                label="دسته بندی"
                                errors={errors}
                                register={register}
                                name="category"
                                placeholder="دسته بندی موردنظر را انتخاب کنید"
                                options={cat}
                                value={cat.find((c) => c.value === value)}
                                onChange={(e) => setValue("category", e.value)}
                            />
                        )}
                    // rules={{ required: true }}
                    />
                </div>
                <div className="col-span-2 flex justify-center">
                    <Button htmlType="submit" className="mx-auto" type='primary'>ثبت</Button>
                </div>
            </form>
        </div>
    )
}

export default Image