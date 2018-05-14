import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  }

  render() {
    const { project, teamId, currentUserId } = this.props;
    let li = '';
    // will only display public projects unless the current user is the
    // creator
    if (!project.privacy || project.creator_id === currentUserId ) {
      li = (
        <li>
          <span className='project-name'>{project.name}</span>
          <span
            className='project-options'
            onClick={() => console.log('wutwut')}>...</span>
        </li>
      );
    }
    return (
      <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}
        onClick={this.handleClick} >
        {li}
      </Link>
    );
  }
}

export default ProjectIndexItem;
