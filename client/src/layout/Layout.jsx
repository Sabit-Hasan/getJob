import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.scss";

export default function Layout({ children }) {
    return (
        <>
            <div className="layout">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}