import { MenuItem, Button, Classes } from "@blueprintjs/core";
import { type ItemRenderer, Select } from "@blueprintjs/select";
import clsx from "clsx";
import { useCallback, useState } from "react";
import {
  areFilmsEqual,
  type Film,
  filterFilm,
  getFilmItemProps,
  TOP_100_FILMS,
} from "./films";

export function SelectExample() {
  const [selectedFilm, setSelectedFilm] = useState<Film>();

  const itemRenderer = useCallback<ItemRenderer<Film>>(
    (film, props) => {
      if (!props.modifiers.matchesPredicate) {
        return null;
      }
      return (
        <MenuItem
          key={film.rank}
          {...getFilmItemProps(film, props)}
          roleStructure="listoption"
          selected={film === selectedFilm}
        />
      );
    },
    [selectedFilm]
  );

  return (
    <Select
      itemPredicate={filterFilm}
      itemRenderer={itemRenderer}
      items={TOP_100_FILMS}
      itemsEqual={areFilmsEqual}
      menuProps={{ "aria-label": "films" }}
      noResults={noResults}
      onItemSelect={setSelectedFilm}
    >
      <Button
        alignText="start"
        endIcon="caret-down"
        icon="film"
        text={maybeRenderSelectedFilm(selectedFilm)}
        textClassName={clsx({
          [Classes.TEXT_MUTED]: selectedFilm === undefined,
        })}
      />
    </Select>
  );
}

function maybeRenderSelectedFilm(selectedFilm: Film | undefined) {
  return selectedFilm
    ? `${selectedFilm.title} (${selectedFilm.year})`
    : "(No selection)";
}

const noResults = (
  <MenuItem disabled text="No results." roleStructure="listoption" />
);
