import { useState } from "react";

const FormCreateTournament = () => {
  const [form, setForm] = useState({
    name: "",
    ciudad: "",
    categorias: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  return (
    <form action="" className="flex flex-col gap-2">
      <div>
        <label htmlFor="name">Nombre del torneo</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={changeHandler}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="ciudad">Ciudad</label>
        <input
          type="text"
          value={form.ciudad}
          name="ciudad"
          onChange={changeHandler}
          id="ciudad"
        />
      </div>
      <div>
        <label htmlFor="categorias">Cantidad de categorias</label>
        <input
          type="number"
          value={form.categorias}
          name="categorias"
          onChange={changeHandler}
          id="categorias"
        />
      </div>
    </form>
  );
};

export default FormCreateTournament;
