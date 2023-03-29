import React, { memo } from 'react';
import './SearchField.scss';

type Props = {
  nameSearch: string;
  setNameChange: (value: string) => void;
};

export const SearchField: React.FC<Props> = memo(({ nameSearch, setNameChange }) => {
  return (
    <div className="input-search">
      <p className="control has-icons-left has-icons-right">
        <input
          data-cy="SearchField"
          type="text"
          className="input"
          placeholder="Search"
          value={nameSearch}
          onChange={(event) => setNameChange(event.target.value)}
        />

        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>

        {nameSearch && (
          <span className="icon is-right">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete"
              onClick={() => setNameChange('')}
            />
          </span>
        )}
      </p>
    </div>
  );
});
