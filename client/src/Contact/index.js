import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { StaggeredMotion, Motion, spring } from 'react-motion';

// import { swirl, swirl1, swirl3, swirl4 , swirl5, swirl6 } from './animation';
import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (translationX) => ({
  transform: `translateX(${translationX}px)`
});

class Contact extends Component {
  // componentDidMount() {
  //   swirl.generate().replay();
  //   swirl1.generate().replay();
  //   swirl3.generate().replay();
  //   swirl4.generate().replay();
  //   swirl5.generate().replay();
  //   swirl6.generate().replay();
  // }
  //
  // componentWillUnmount() {
  //   swirl.stop();
  //   swirl1.stop();
  //   swirl3.stop();
  //   swirl4.stop();
  //   swirl5.stop();
  //   swirl6.stop();
  // }

  render() {
    const { classes } = this.props;
    const social = [
      {
        icon: 'github-alt',
        socialLink: 'https://github.com/hanernlee',
      },
      {
        icon:'linkedin',
        socialLink: 'https://linkedin.com/in/hanernlee',
      },
      {
        icon:'twitter',
        socialLink: 'https://twitter.com/hanernlee',
      },
      {
        icon:'envelope',
        socialLink: 'mailto:hanernlee@gmail.com',
      }
    ];

    return (
      <div className={classes.baseContact}>
        <Motion
           defaultStyle={{ translateX: -1000 }}
           style={{ translateX: spring(0, config) }}
        >
          {
            (value) =>
              <div className={classes.about} style={toCSS(value.translateX)}>
                <div>
                  <div className={classes.greeting}>
                    <div className={classes.profileImage}></div>
                    <div>Hi, I'm <span className={classes.green}>Chris</span>.</div>
                  </div>
                  <div className={classes.profileDesc}>
                    I am a <span className="rainbow">Melbourne-based Software Developer</span> with a huge passion for crafting responsive <span className={classes.purple}>mobile</span> & <span className={classes.purple}>web applications</span>.
                  </div>
                  <div className={classes.profileDesc}>
                    Driven by passion and curiosity, I spend most of my free time developing <span className="rainbow"> iOS (Swift) Applications</span>. <span className={classes.purple}>New experiences</span> & <span className={classes.purple}>challenges</span> are things I constantly look forward to. Feel free to get in touch.
                  </div>
                </div>
              </div>
          }
        </Motion>
        <StaggeredMotion
          defaultStyles={[{x: -500}, {x: -500}, {x: -500}, {x: -500}]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? {x: spring(0, config)}
              : {x: spring(prevInterpolatedStyles[i - 1].x, config)}
          })}>
          {interpolatingStyles =>
            <div className={classes.socialContainer}>
              {interpolatingStyles.map((style, i) =>
                  <a target="_blank" href={social[i].socialLink} key={i} style={toCSS(style.x)} className={classes.social}>
                    <i className={`fa fa-${social[i].icon} fa-2x`} />
                  </a>
                )
              }
            </div>
          }
        </StaggeredMotion>
      </div>
    )
  }
}

export default injectSheet(styles)(Contact);
