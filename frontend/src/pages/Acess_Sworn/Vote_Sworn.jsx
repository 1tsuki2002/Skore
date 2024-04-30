import {
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'



return(
    
    <nav>
        <div className='Estilo'>
        <NumberInput defaultValue={15} min={1} max={10}>
            <NumberInputField />
             <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
             </NumberInputStepper>
            </NumberInput>
        </div>
    </nav>
    );
