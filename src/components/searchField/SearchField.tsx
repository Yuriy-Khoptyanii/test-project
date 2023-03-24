import React, { memo, useState } from 'react';
import './SearchField.scss';

export const SearchField: React.FC = memo(() => {
  const [nameSearch, setNameSearch] = useState('');

  return (
    <div className="panel-block">
      <p className="control has-icons-left has-icons-right">
        <input
          data-cy="SearchField"
          type="text"
          className="input"
          placeholder="Search"
          value={nameSearch}
          onChange={(event) => setNameSearch(event.target.value)}
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
              onClick={() => setNameSearch('')}
            />
          </span>
        )}
      </p>
    </div>
  );
});
