import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from '@chakra-ui/react'

type FormFields = {
  email: string;
  password: string;
}

function Primary_Login() {
  const { register, handleSubmit, formState: {errors}, } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
   
    return (
   <div className='container'>
      <form className='login-container' onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email', {
          required: "Email necessario",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email precisa está incluso @";
            }
            return true;
          },
        })} 
        type='email' 
        variant='filled' 
        placeholder='E-mail' />
        {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        <Input {...register('password', {
          required: "Senha necessaria",
          minLength: {
            value:8,
            message: "A senha precisa ter no minimo 8 caracteres",
          },
        })} 
        type='password' 
        variant='filled' 
        placeholder='Senha' />
        {errors.password && <div className="text-red-500">{errors.password.message}</div>}
         <button type='submit'>Submit</button>
      </form>
   </div>
     
  )
}

export default Primary_Login 
  