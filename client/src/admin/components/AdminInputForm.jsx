const AdminInputForm = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const changeHandler = (event) => {
    const value = event.target.value;
    cambiarEstado({
      ...estado,
      campo: value,
    });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({
          ...estado,
          valido: true,
        });
        console.log(estado.valido);
      } else {
        cambiarEstado({
          ...estado,
          valido: false,
        });
        console.log(estado.valido);
      }
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={tipo}
        value={estado.campo}
        name={name}
        onChange={changeHandler}
        id={name}
        placeholder={placeholder}
        onKeyUp={validacion}
        onBlur={validacion}
        className={`border-2  placeholder-gray-400 text-sm text-gray-900 w-full rounded-lg p-2 focus:outline-none ${estado.valido === null ? " border-gray-300" : estado.valido ? "border-green-700" : "border-red-700"}`} 
      />
      {!estado.valido && estado.valido !== null && <p>{leyendaError}</p>}
    </div>
  );
};

export default AdminInputForm;
