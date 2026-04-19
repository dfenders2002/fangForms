export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-heading">Pagina niet gevonden</h2>
      <a href="/" className="text-accent hover:underline">
        Terug naar home
      </a>
    </div>
  );
}
