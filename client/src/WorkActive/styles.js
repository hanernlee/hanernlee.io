import { Color } from '../color.js';

export const styles = {
  baseModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '1',
    color: Color.white,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.lightBlack,
  },
  modal: {
    width: 'calc(100% - 60px)',
    height: 'calc(100% - 100px)',
    padding: '60px',
    backgroundColor: Color.blue,
    zIndex: '2',
  },
  title: {
    color: Color.white,
    fontSize: '32px',
    fontWeight: 'bold'
  },
  workContainer: {
    display: 'flex',
    height: '100%',
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
    '@media (max-width: 733px)': {
      marginRight: '0',
    },
  },
  description: {
    marginTop: '20px',
  },
  image: {
    backgroundImage: props => props.work ? `url(${props.work.image})`: '',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    marginLeft: '20px',
    '@media (max-width: 733px)': {
      display: 'none',
    },
  },
  miniImage: {
    backgroundImage: props => props.work ? `url(${props.work.image})`: '',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    margin: '20px 0',
    '@media (min-width: 733px)': {
      display: 'none'
    },
  },
  workLink: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  workLinkTag: {
    backgroundColor: Color.white,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    textDecoration: 'none',
    color: Color.pink,
    marginRight: '20px',
    transition: '0.3s ease color',
    '&:hover': {
      color: Color.purple
    }
  }
}
