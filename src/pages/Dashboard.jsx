function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <h1 className="text-3xl font-bold text-slate-900">
        Salut {user?.firstName || "utilisateur"} 👋
      </h1>
    </section>
  );
}

export default Dashboard;