import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout =()=>{

    const navigator =useNavigation();
    if(navigator.state == 'loading') return <h1>Loading</h1>

    return(

        <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
}