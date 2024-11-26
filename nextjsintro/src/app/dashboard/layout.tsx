
    export const metadata = {
        title: "Painel do Site",
        description: "Painel demonstrativo"
    }

    export default function DashboardLayout({children}: {children: React.ReactNode}){

        return(
            <>
            <h3>Header do dashboard</h3>
            <br />
            {children}
            </>
        )


    }