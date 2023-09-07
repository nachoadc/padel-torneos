import { useState } from "react";
import AdminInputForm from "./AdminInputForm";
import AdminDaysTournament from "./AdminDaysTournament";

const AdminFormCreateTournament = () => {
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [fechaInicio, setFechaInicio] = useState({ campo: "", valido: null });


  const expresiones = {
    torneo: /^[a-zA-Z0-9\s\-]{4,100}$/, // Letras, números, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 dígitos.
    correo: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 números.
    fecha: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
  };

  

  return (
    <form action="" className="flex flex-col gap-2">
      <AdminInputForm
        estado={nombre}
        cambiarEstado={setNombre}
        tipo="text"
        label="Nombre del torneo"
        placeholder="1ra fecha anual impares"
        name="name"
        leyendaError="Este campo es requerido"
        expresionRegular={expresiones.torneo}
      />

      <AdminInputForm
        estado={fechaInicio}
        cambiarEstado={setFechaInicio}
        tipo="date"
        label="Fecha de inicio"
        /* placeholder="1ra fecha anual impares" */
        name="fechaInicio"
        leyendaError="ingreso mal la fecha"
        expresionRegular={expresiones.fecha}
      />

      { fechaInicio.campo && <AdminDaysTournament fecha={fechaInicio.campo}/>}

      <div>
        <label>
          <input type="checkbox" name="términos" id="términos" />
          Acepto los términos y condiciones
        </label>
      </div>

      {false && (
        <div>
          <p>
            <b>Error:</b> Por favor, rellena todos los campos
          </p>
        </div>
      )}

      <div>
        <button type="submit">Enviar</button>
        <p>El formulario se envió correctamente</p>
      </div>
    </form>
  );
};

export default AdminFormCreateTournament;
