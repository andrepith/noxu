import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { debounce } from "lodash";

import { getMovieListByTitle } from "store/actions";

const SearchByTitle = ({ getMovieListByTitle }) => {
  try {
    const handleChange = e => {
      fetchApi(e.target.value);
    };

    const fetchApi = debounce(search => {
      getMovieListByTitle({ search });
    }, 300);
    return (
      <InputGroup className="mb-4">
        <FormControl onChange={handleChange} placeholder="Try Avengers...." />
        <InputGroup />
      </InputGroup>
    );
  } catch (error) {
    console.error(error);
    return <div>Something Went Wrong</div>;
  }
};

export default connect(null, { getMovieListByTitle })(SearchByTitle);
