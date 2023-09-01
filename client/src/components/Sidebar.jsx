import { NavBar } from "./NavBar"

const Sidebar = () => {
  return (
    <aside className="bg-white w-1/6 p-2">
        <section>
            <h1 className="font-bold text-2xl">PADEL APP</h1>            
        </section>
        <NavBar />
    </aside>
  )
}

export default Sidebar