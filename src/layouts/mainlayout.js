import Navigation from "./main/navigation";

export default function MainLayout({ children }) {
    return (
        <>
            <div className="">
                <Navigation />
            <main>{children}</main>
            </div>
        </>
    )
}