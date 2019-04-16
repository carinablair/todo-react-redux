import React from "react";
import PropTypes from "prop-types";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { TODO_FILTERS } from "../constants/action-types";

const TodoFilter = ({ onFilterChange, currentFilter }) => (
  <RadioGroup row value={currentFilter}>
    <FormControlLabel
      onClick={() => onFilterChange(TODO_FILTERS.COMPLETED)}
      value="completed"
      control={<Radio color="primary" />}
      label="Completed"
      labelPlacement="top"
    />
    <FormControlLabel
      onClick={() => onFilterChange(TODO_FILTERS.INCOMPLETE)}
      value="incomplete"
      control={<Radio color="primary" />}
      label="Incomplete"
      labelPlacement="top"
    />
    <FormControlLabel
      onClick={() => onFilterChange(TODO_FILTERS.ALL)}
      value="all"
      control={<Radio color="primary" />}
      label="All"
      labelPlacement="top"
    />
  </RadioGroup>
);

TodoFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default TodoFilter;
