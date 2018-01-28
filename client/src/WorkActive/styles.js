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
  },
  description: {
    marginTop: '50px',
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
  },
  workLink: {
    marginTop: 'auto',
  }
}
