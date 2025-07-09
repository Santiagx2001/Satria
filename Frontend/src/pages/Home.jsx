import { Header } from "../components/sections/Header"
import { Banner } from "../components/sections/Banner"
import { QuienesSomos } from "../components/sections/QuienesSomos"
import { Productos } from "../components/sections/Productos"


export const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Productos />
        </>
    )
}