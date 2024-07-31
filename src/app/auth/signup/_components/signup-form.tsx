"use client";

import React from "react";
import { type SignupInput, SignupSchema } from "@/validators/signup-validator";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

const SignUpForm = () => {
  const form = useForm<SignupInput>({
    resolver: valibotResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: SignupInput) => {
    console.log(data);
  };

  return <div>SignUpForm</div>;
};

export default SignUpForm;
