import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions/index";
import { Button, TextField } from "@material-ui/core";

const mapDispatchToProps = {
  addTodo: addTodo
};

class ConnectedTodoInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  handleAddTodo(textInputRef) {
    this.props.addTodo({
      todoDescription: textInputRef.value,
      id: uuidv1()
    });
    textInputRef.value = "";
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.handleAddTodo(this.textInput.current);
        }}
      >
        <div className="form-group">
          <TextField
            required
            id="todoDescription"
            inputRef={this.textInput}
            fullWidth
            variant="outlined"
            label="Description"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    );
  }
}

const TodoInput = connect(
  null,
  mapDispatchToProps
)(ConnectedTodoInput);

export default TodoInput;
