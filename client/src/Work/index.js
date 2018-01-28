import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { StaggeredMotion, spring } from 'react-motion';

import { styles } from './styles';
import { fetchWorks } from '../Firebase/actions';

import WorkMini from '../WorkMini';

const config = { stiffness: 200, damping: 10 };
const toCSS = (translationY) => ({
  transform: `translateY(${translationY}px)`,
  boxShadow: 'rgba(0, 0, 0, 0.3) 10px 10px 20px',
});

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      workEntries: [],
    }
  }

  componentDidMount() {
    this.props.fetchWorks();
  }

  onLoad(work) {
    this.setState(({ workEntries }) => {
      return { workEntries: workEntries.concat(work) }
    });
  }

  render() {
    const { classes, worksList } = this.props;
    const loadedWorkEntries = this.state.workEntries;
    console.log(worksList);

    if (!worksList) {
      return null;
    } else {
      if (worksList.length == loadedWorkEntries.length) {
        return (
          <StaggeredMotion
            defaultStyles={[{y: -500}, {y: -500}, {y: -500}, {y: -1000}, {y: -1000}]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {y: spring(0, config)}
                : {y: spring(prevInterpolatedStyles[i - 1].y, config)}
            })}>
            {interpolatingStyles =>
              <div className={classes.containerWork}>
                {interpolatingStyles.map((style, i) =>
                    <div
                      className={classes.baseWork}
                      key={i}
                      style={toCSS(style.y)}
                    >
                      <WorkMini
                        image={worksList[i].image}
                        demo={worksList[i].demo}
                        github={worksList[i].github}
                        title={worksList[i].title}
                        meta={worksList[i].meta}
                      />
                    </div>
                  )
                }
              </div>
            }
          </StaggeredMotion>
        )
      } else {
        return (
          <div className={classes.hidden}>
            {worksList.map((work, index) =>
              <img src={work.image} alt={work.name} key={index} onLoad={this.onLoad.bind(this, work)} />
            )}
          </div>
        )
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    worksList: state.worksList
  };
};

export default connect(mapStateToProps, { fetchWorks })(injectSheet(styles)(Work));
