import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EntradasContext } from "../../Contexts/entradasContexts";

interface iDataForm {
    nome: string;
    quantidade: number;
}

export const EstoqueEntrada = () => {

    // const [items, setItems] = useState <iDataForm[]> ([])
    const {items, registerItem} = useContext(EntradasContext)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm <iDataForm>()

    const submit = (data: iDataForm) => {
        registerItem(data)
        console.log(items)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Nome do item</label>
            <input type="text" {...register('nome')} />
            <label htmlFor="">Quantidade do item</label>
            <input type="number" {...register('quantidade')} />

            <button type="submit">Cadastrar</button>
        </form>
    )
}