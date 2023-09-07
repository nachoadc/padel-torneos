import AdminFormCreateTournament from "../components/AdminFormCreateTournament"

const AdminCreateTournamentPage = () => {
  return (
    <main className="flex flex-col gap-4 justify-center items-center w-full">
      <h1>CREAR TORNEO</h1>
      <AdminFormCreateTournament />
    </main>
  )
}

export default AdminCreateTournamentPage