import { MultiSelect, type ItemRenderer } from "@blueprintjs/select";
import { useCallback, useState } from "react";
import {
  areFilmsEqual,
  filterFilm,
  getFilmItemProps,
  TOP_100_FILMS,
  type Film,
} from "./films";
import { MenuItem } from "@blueprintjs/core";

export function MultiSelectExample() {
  const [selectedFilms, setSelectedFilms] = useState<Film[]>([]);

  const getSelectedFilmIndex = useCallback(
    (film: Film) => selectedFilms.indexOf(film),
    [selectedFilms]
  );

  const isFilmSelected = useCallback(
    (film: Film) => getSelectedFilmIndex(film) !== -1,
    [getSelectedFilmIndex]
  );

  const selectFilm = useCallback(
    (film: Film) => {
      setSelectedFilms([...selectedFilms, film]);
    },
    [selectedFilms]
  );

  const deselectFilm = useCallback(
    (index: number) => {
      const film = selectedFilms[index];
      if (film == null) {
        return;
      }
      setSelectedFilms(selectedFilms.filter((_, i) => i !== index));
    },
    [selectedFilms]
  );

  const handleFilmSelect = useCallback(
    (film: Film) => {
      if (!isFilmSelected(film)) {
        selectFilm(film);
      } else {
        deselectFilm(getSelectedFilmIndex(film));
      }
    },
    [deselectFilm, getSelectedFilmIndex, isFilmSelected, selectFilm]
  );

  const handleTagRemove = useCallback(
    (_tag: React.ReactNode, index: number) => {
      deselectFilm(index);
    },
    [deselectFilm]
  );

  const renderFilm: ItemRenderer<Film> = useCallback(
    (film, props) => {
      if (!props.modifiers.matchesPredicate) {
        return null;
      }
      return (
        <MenuItem
          key={film.rank}
          {...getFilmItemProps(film, props)}
          roleStructure="listoption"
          selected={isFilmSelected(film)}
        />
      );
    },
    [isFilmSelected]
  );

  return (
    <MultiSelect
      itemPredicate={filterFilm}
      itemRenderer={renderFilm}
      items={TOP_100_FILMS}
      itemsEqual={areFilmsEqual}
      noResults={noResults}
      onItemSelect={handleFilmSelect}
      selectedItems={selectedFilms}
      tagInputProps={{ onRemove: handleTagRemove }}
      tagRenderer={renderTag}
    />
  );
}

const renderTag = (film: Film) => film.title;

const noResults = (
  <MenuItem disabled text="No results." roleStructure="listoption" />
);
