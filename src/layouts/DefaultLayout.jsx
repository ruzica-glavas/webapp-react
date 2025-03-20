import Header from "../components/Header";
import { Outlet } from "react-router-dom";

//Import GlobaContext
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";

//Import del componente Loader
import Loader from "../components/Loader";

export default function DefaultLayout(){

    const {isLoading} = useContext(GlobalContext)

    return(
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>

            {isLoading && <Loader />}
        </>
    )
}