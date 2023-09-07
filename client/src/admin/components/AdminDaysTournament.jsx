import { addDays, eachDayOfInterval } from "date-fns";
import { es } from "date-fns/locale";
import { formatWithOptions } from "date-fns/fp";
import AdminButtonDays from "./AdminButtonDays";
const AdminDaysTournament = ({ fecha }) => {
  const result = eachDayOfInterval({
    start: addDays(new Date(fecha), 1),
    end: addDays(new Date(fecha), 7),
  });

  console.log(result);

  return (
    <div className="flex flex-col gap-2">
      <h2>Seleccione los dias que se jugara el torneo</h2>
      <div className="flex flex-row gap-2">
        {result.map((day) => (
          <AdminButtonDays
            key={day.getDay()}
            day={formatWithOptions({ locale: es }, "ccc", day)}
            number={formatWithOptions({ locale: es }, "d", day)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDaysTournament;
