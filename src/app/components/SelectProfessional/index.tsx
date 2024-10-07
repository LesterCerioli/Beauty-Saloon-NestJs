import * as React from "react"
import { FormEvent, useState } from "react";
import { MdError } from "react-icons/md";
 
interface SelectProps{
    id: number;
    names: string[];
    addProfessional: (id: number, professional:string)=> void;
}

export function SelectProfessional({id, names, addProfessional}: SelectProps) {
  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [isError, setError] = useState(true);
  
  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    if(selectedProfessional != ""){
      addProfessional(id, selectedProfessional);
      setError(false);
    }
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedProfessional(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="h-fit flex flex-col gap-2">
      <label htmlFor="profissionais">Escolha o atendente:</label>
      <div className="flex justify-between items-center">
        <select name="profissionais" id="profissionais" value={selectedProfessional} onChange={handleSelectChange}>
          <option className="p-4" value="" disabled hidden>Escolha aqui</option>
          {names.map((name:string) => {
              return <option key={names.indexOf(name)} value={name}>{name}</option>
          })}
        </select>
        <MdError className={isError ? "visible text-red-500" : "invisible"} />
      </div>
      <input type="submit" value="Ok" className="w-1/2 mx-auto border-green-500 border-2 rounded-md cursor-pointer text-black transition-all duration-300 hover:bg-green-500 hover:text-white" />
    </form>
  )
}