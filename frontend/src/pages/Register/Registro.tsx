import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod';

import { Input, Text} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const fromSchema = z.object({
    birthday: z.date(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    cpf: z.string(),
    role: z.union([z.literal('editor'), z.literal('viewer')]),
});

type FormValues = z.infer<typeof fromSchema>;

export default function Registro() {
    const { register, setValue, handleSubmit } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })

    
    return(
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('firstName')} placeholder="Primeiro nome" />
                <Input {...register('lastName')} placeholder="Sobrenome" />
                <Input {...register('cpf')} placeholder="Digite seu CPF" />
                <Input {...register('email')} placeholder="Digite seu E-mail" />
                <DatePicker 
                  onChange={(date) => {
                    if(date) {
                        setValue('birtday', date);
                    }
                  }}
                />
                <Select 
                  onValueChange={(value: FormValues['role']) => setValue('role', value)}
                >
                <SelectTrigger>
                    <SelectValue placeholder="Role"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="viewer">Viewer</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                </SelectContent>
                </Select>

                <Button type="submit" colorScheme='teal' size='md'>Button</Button>
            </form>
        </div>
    );
}