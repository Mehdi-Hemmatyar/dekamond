"use client";

import { loginUser } from "@/actions/handleLogin";
import Card from "@/components/Card";
import FormProvider from "@/components/FormProvider";
import type { FormInput } from "@/types/FormTypes";
import { useState, useTransition } from "react";
import FormErrorList from "../FormProvider/FormErrorList";
import { useRouter } from "next/navigation";

const defaultInputs: FormInput[] = [
  {
    id: 1,
    name: "mobile",
    label: "شماره همراه",
    placeholder: 'مثال: 09123456789',
    type: "tel",
    required: true,
    validationType: "phone",
  },
];

const LoginComponent = () => {

    const [isPending , startTransition] = useTransition()
    const [error , setError] = useState<string[]>([])
    const router = useRouter()

  const onSubmit = (data: FormData) => {
    startTransition(async()=>{
        try {
            const res = await loginUser(data)
            localStorage.setItem('userObject' , JSON.stringify(res))
            setError([])
            router.replace('/dashboard')
        } catch (error) {
            setError(['دریافت اطلاعات با خطا مواجه شد'])
        }
    })
  };
  return (
    <>
      <Card
        title="ورود به سامانه"
        description="جهت ورود شماره همراه خودرا وارد کنید"
      >
        <FormProvider
          inputs={defaultInputs}
          onSubmit={onSubmit}
          buttonLabel="ورود"
          isLoading={isPending}
        />
        <FormErrorList errors={error} />
      </Card>
    </>
  );
};

export default LoginComponent;
