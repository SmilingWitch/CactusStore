import "./LogIn.css"


function LogIn() {
    return (
        <div className="principalContainer">
            <div className="secundaryContainer">
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input type="text" className="form-control" />
                    <br />
                    <label>Contraseña</label>
                    <br />
                    <input type="password" className="form-control"/>
                    <br />
                    <button className="btn btn-primary">Iniciar Sesion</button>
                </div>

            </div>

        </div>
 
    );
}

export default LogIn ;