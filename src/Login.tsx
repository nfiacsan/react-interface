export default function Login() {
  return (
    <div className="flex flex-col gap-8 justify-around p-8 my-16 bg-white rounded shadow-lg">
      <input
        type="text"
        placeholder="Email"
        className="placeholder:text-primary-default"
      />
      <input
        type="password"
        placeholder="Password"
        className="placeholder:text-primary-default"
      />
      <button className="py-2 px-4 mx-2 font-bold rounded border text-primary-dark border-primary-dark hover:text-primary-light hover:bg-primary-dark">
        Connexion
      </button>
      <button className="font-light underline">Inscription</button>
      <button className="text-sm font-semibold">Créer ma boutique</button>
    </div>
  );
}
