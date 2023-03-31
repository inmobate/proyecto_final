import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Perfil() {
  const { user } = useAuth0();
  return (
    <div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.given_name}</h2>
          <h2>{user.family_name}</h2>
          <p>{user.email}</p>
        </div>
      <button>
        <a href="/dashboard">Volver</a>
      </button>
    </div>
  );
}
