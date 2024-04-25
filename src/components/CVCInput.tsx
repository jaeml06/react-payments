// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { CVC } from "../types/card";
import { ShowComponents } from "../types/showCompents";

interface Props {
  CVC : CVC
  handleInput : Dispatch<SetStateAction<CVC>>,
  handleShowComponent : Dispatch<SetStateAction<ShowComponents>>,
}
export default function CVCInput({CVC, handleInput, handleShowComponent} : Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );

  useEffect(() => {
    const messages = Object.values(CVC).map(value => value.errorMessage);
    setErrorMessages(messages);
  }, [CVC]);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(CVC).reduce((pre, cur) => {
        if(!cur.isError && cur.value !== '' && cur.value.length === 3){
          return pre + 1;
        }
        return pre;
      }, 0)
      return isNotAllError === 1
    }
    if(checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        passWordInput: true,
      }));
    }
  }, [CVC, handleShowComponent]); 

  const handleUpdateInput = (index: number, value: string) => {

    const cardKey = 'CVC' as keyof CVC;
    handleInput((prevState : CVC) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value : value
        },
      };
    });
  };

  const handleUpdateErrorMessages = (index: number, errorMessage: string, isError: boolean) => {
    const cardKey = 'CVC' as keyof CVC;
    handleInput((prevState : CVC) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          errorMessage: errorMessage,
          isError: isError 
        },
      };
    });
  };

    
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, info: string, index : number, maxLength: number) => {
    try {
          Validation[info]?.(e.target.value, maxLength);
          handleUpdateErrorMessages(index, '', false);
          handleUpdateInput(index, e.target.value);
        } catch (error) {
            if (error instanceof Error) {
            handleUpdateErrorMessages(index, error.message, true);
          }
        }
  };

  const checkInputError = (index : number) => {
    const cardKey = 'CVC' as keyof CVC;
    return CVC[cardKey].isError;
  }

  return (
    <> 
      <FieldTitle title="CVC 번호를 입력해 주세요"/>
      <InputField label="CVC" count={1} errorMessages={errorMessages}>
      {Array.from({ length: 1 }, (_, index) => (
      <Input
        key={index}
        type="string"
        maxLength={3}
        placeholder={'123'}
        isError = {checkInputError(index)}
        onChange={(e) => handleInputChange(e, 'CVC', index, 3)}
      />
      ))}
      </InputField>
    </>
  )
}