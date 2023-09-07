import { subDays, eachDayOfInterval } from "date-fns";
import { es } from "date-fns/locale";
import { formatWithOptions } from "date-fns/fp";
import AdminButtonDays from "./AdminButtonDays";

const AdminRegistrationDeadline = ({ fecha }) => {
  /* const result = eachDayOfInterval({
    start: subDays(new Date(fecha), 1),
    end: subDays(new Date(fecha), 7),
  }); */

  const result = eachDayOfInterval({
    start: subDays(new Date(fecha), 6),
    end: new Date(fecha),
  });

  console.log(result);

  return (
    <div className="flex flex-col gap-2">
      <h2>Seleccione la fecha maxima para registrarse</h2>
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

export default AdminRegistrationDeadline;
