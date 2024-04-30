import { SubmitHandler, useForm } from "react-hook-form";
import { Input,Text} from '@chakra-ui/react'
import { Link } from "react-router-dom";

import './primary-input.css';

type FormFields = {
  email: string;
  password: string;
}

function Primary_Login() {
  const {handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
   
    return (

   <div className='container' >
    <div className="title-container">
      <Text className="fonte-B title">Skore</Text>
    </div>

      <form className='form-container'  onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <Text className='fonteN form-title'>E-mail</Text>
        <Input type='email' variant='outline' placeholder='E-mail' size='sm' className='fonteN' required/>

        {/* Senha */}
        <Text className='fonteN form-title'>Senha</Text>
        <Input type='password' variant='outline' placeholder='Senha' size='sm' className='fonteN' required minLength={8}/>
        <Link className="fonteN fSenha" to="../ForgotP">Esqueceu a senha?</Link>


        <button className="fonteN form-btn" type='submit'>Logar</button>

        <Text className="fonteN cadastroT">Não tem cadastro? <Link className="fonteN cadastro" to="../Sign_Up" >Inscreva-se</Link></Text>

      </form>
   </div>
     
  )
  
}

export default Primary_Login 
  