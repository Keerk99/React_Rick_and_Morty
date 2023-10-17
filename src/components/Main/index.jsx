import "./style.css";
import { useState, useEffect, useCallback } from "react";
import CharacterCard from "../CharacterCard";
import { AiOutlineSearch } from "react-icons/ai";
import NoData from "../NoData";
import { RenderPageButtons } from "../PageButtons";

export default function Main() {
  const urlCharacters = "https://rickandmortyapi.com/api/character";
  const [page, setPage] = useState(1);
  const [characters, setcharacters] = useState([]);
  const [searchKey, setsearchKey] = useState("");
  const [buttonGroupVisible, setButtonGroupVisible] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = useCallback(async () => {
    const listPage = page ? `?page=${page}` : "";
    const data = await fetch(`${urlCharacters}${listPage}`).then((response) =>
      response.json()
    );
    setcharacters(data.results);
    setTotalPages(data.info.pages);
  }, [page]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const fetchSearchCharacters = async (name) => {
    const type = name ? `/?name=${name}` : "";
    const data = await fetch(`${urlCharacters}${type}`).then((response) =>
      response.json()
    );
    setcharacters(data.results);
  };

  useEffect(() => {
    fetchSearchCharacters();
  }, []);

  const searchCharacter = (e) => {
    e.preventDefault();
    fetchSearchCharacters(searchKey);
    if (searchKey.length > 3) {
      setButtonGroupVisible(false);
    } else {
      setButtonGroupVisible(true);
      setPage(1);
    }
  };

  const decrementPage = () => {
    setPage(page - 1);
  };
  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <section>
        <div className="banner">
          <form onSubmit={searchCharacter} className="form__container">
            <input
              type="text"
              id="txt__character"
              className="search__character"
              placeholder="Search a character"
              onChange={(e) => setsearchKey(e.target.value)}
            />
            <button type="submit" className="search__button">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </section>
      <section>
        <div className="div__cards">
          <div className="cards__container">
            {characters && characters.length > 0 ? (
              <>
                <ul className="cards__list">
                  {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                  ))}
                </ul>
                {buttonGroupVisible && (
                  <div className="button__group">
                    {page > 1 ? (
                      <button onClick={decrementPage} className="page__button">
                        Prev
                      </button>
                    ) : null}
                    {RenderPageButtons(totalPages, page, setPage)}
                    {page < 42 ? (
                      <button onClick={incrementPage} className="page__button">
                        Next
                      </button>
                    ) : null}
                  </div>
                )}
              </>
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
