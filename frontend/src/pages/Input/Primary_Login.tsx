import { SubmitHandler, useForm } from "react-hook-form";
import { Input,Text} from '@chakra-ui/react'
// import toast, { Toaster } from 'react-hot-toast';

import './primary-input.css'

// import back from '/src/assets/imgs/back2.jpg'


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
        <Text className='fonte-B form-title'>E-mail</Text>
        <Input type='email' variant='outline' placeholder='E-mail' size='sm' className='fonte' required/>

        {/* Senha */}
        <Text className='fonte-B form-title'>Senha</Text>
        <Input type='password' variant='outline' placeholder='Senha' size='sm' className='fonte' required minLength={8}/>
        <Text className="fonte fSenha"><a href="#">Esqueceu a senha?</a></Text>


        <button className="fonte-B form-btn" type='submit'>Logar</button>

        <Text className="fonte cadastro">Não tem cadastro? <a href="#">Inscreva-se</a></Text>

      </form>
   </div>
     
  )
  
}

export default Primary_Login 
  