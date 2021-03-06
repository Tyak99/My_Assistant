import React from "react";
import { UncontrolledTooltip} from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import * as actionCreators from "../../store/actions/task";
import { connect } from 'react-redux';

import { Button } from "components";

class Task extends React.Component {
  state = {
    tasksList: [],
    number: '',
    edit: '',
    remove: ''
  }
  componentDidMount() {
    if(this.props.tasks == null) {
      this.props.getTask(this.props.token, this.props.userId)
    } else {
      return
    }
  }
  render() {
    let data = null
    if(this.props.tasks) {
        data = this.props.tasks.map((task, i) => {
            const edit = 'edit' + i
            const remove = 'remove' + i
            return (
              <tr key = {task.id}> 
                <td> {task.text} </td>
                <td>
                    <Button id={edit} round icon iconMini neutral color="info">
                      <i className="now-ui-icons ui-2_settings-90" />
                    </Button>
                    <UncontrolledTooltip placement="top" target={edit} delay={0}>
                      Edit Task
                    </UncontrolledTooltip>
                    <Button id={remove} round icon iconMini neutral color="danger" onClick = {() => this.props.rm(this.props.userId, task.timestamp, this.props.token)}>
                      <i className="now-ui-icons ui-1_simple-remove" />
                    </Button>
                    <UncontrolledTooltip placement="top" target={remove} delay={0}>
                      Remove
                    </UncontrolledTooltip>
                </td>
              </tr>
            )
          })
    }
    return (
      <div className="table-full-width table-responsive">
        <table className="table">
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    token: state.auth.token,
    userId: state.auth.id
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    rm: (userId, timestamp, token) => dispatch(actionCreators.rem(userId, timestamp, token)),
    getTask: (token, userId) => dispatch(actionCreators.task(token, userId))
  }
}

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
