import { ReactNode } from "react";
import { EntradasProvider } from "../Contexts/entradasContexts";


interface iProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: iProvidersProps) => {

    return (
        <EntradasProvider>
            {children}
        </EntradasProvider>
    )
}