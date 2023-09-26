import React from "react";
import './footer.css'

function foot(){
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Hoy Cocino yo. <br/>Pagina creada por Thiago Becchi<br/>Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );  
};

export default foot;