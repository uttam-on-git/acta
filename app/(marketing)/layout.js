import { Navbar } from "@/components/Navbar";

export default function HomeLayout({children}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main>{ children }</main>
            <footer>footer</footer>
        </div>
    );
}