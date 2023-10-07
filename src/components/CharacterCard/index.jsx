import "./style.css";

export default function CharacterCard({ character }) {
  return (
    <>
      <li className="cards">
        <img
          src={character.image}
          alt={character.name}
          className="cards__img"
        />
        <div className="text__container">
          <h2 className="character__name" id="character__1">
            {character.name}
          </h2>
          <p className="character__status">Status: {character.status}</p>
          <p className="character__species">Specie: {character.species}</p>
          <p className="character__gender">Gender: {character.gender}</p>
        </div>
      </li>
    </>
  );
}
