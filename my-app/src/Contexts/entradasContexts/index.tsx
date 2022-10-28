import { createContext, ReactNode, useState } from "react";

interface iEnterContext {
    items: iDataForm[];
    registerItem: (data: iDataForm) => void;
}

interface iEnterProps {
    children: ReactNode;
}

interface iDataForm {
    nome: string;
    quantidade: number;
}

export const EntradasContext = createContext <iEnterContext> ({} as iEnterContext)

export const EntradasProvider = ({children}: iEnterProps) => {

    const [items, setItems] = useState <iDataForm[]> ([])

    const registerItem = (data: iDataForm) => {

        const newData = [...items,{
            nome: data.nome,
            quantidade: data.quantidade
        }]
        setItems(newData)
    }

    return (
        <EntradasContext.Provider value={{
            items,
            registerItem,
        }}>
            {children}
        </EntradasContext.Provider>
    )
}