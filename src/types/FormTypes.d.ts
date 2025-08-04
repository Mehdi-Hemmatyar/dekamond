import  React from "react";

export type FormInput ={
    label : string;
    name : string;
    required? : boolean;
    placeholder : string;
    id? : number | string;
    type : React.HTMLInputTypeAttribute;
    validationType? : 'phone'
} ;


export interface FormProviderProps {
    onSubmit : (formdata : FormData)=> void;
    inputs : FormInput[];
    buttonLabel : string;
    isLoading? : boolean
}

export interface FormErrorList {
  errors?: string[];
}
