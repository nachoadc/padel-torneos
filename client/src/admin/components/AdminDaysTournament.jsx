import { addDays, eachDayOfInterval } from "date-fns";
import { es } from "date-fns/locale";
import { formatWithOptions } from "date-fns/fp";
const AdminDaysTournament = ({ fecha }) => {
  const result = eachDayOfInterval({
    start: addDays(new Date(fecha), 1),
    end: addDays(new Date(fecha), 7),
  });

  console.log(result);

  return (
    <div className="flex flex-rox gap-2">
      {result.map((day) => (
        <div>{formatWithOptions({ locale: es }, "ccc", day)}</div>
      ))}
    </div>
  );
};

export default AdminDaysTournament;
