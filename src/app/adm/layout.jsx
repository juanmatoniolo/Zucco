import "./admin.css";


export const metadata = {
    title: "Estudio Jurídico",
    description: "Juan CruzZucco",
    themeColor: "#609162",
    manifest: "/manifest.json",
};

export default function AdminLayout({ children }) {
    return (
        <>

            <body>
                <div className="adminLayout">

                    <div className="content">
                        {children}
                    </div>
                </div>

            </body>
        </>
    );
}
