import { Color } from '../color.js';

const circle = {
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const styles = {
  base: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '1',
    backgroundColor: Color.green,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '36px',
    borderRadius: '50%'
  },
  burger: {
    height: '4px',
    width: '27px',
    margin: '2px',
    backgroundColor: Color.blue,
    transition: '0.3s ease all',
  },
  burgerTop: {
    transform: 'translateY(8px) rotate(-45deg)',
  },
  burgerMiddle: {
    transform: 'rotate(45deg)',
  },
  burgerBottom: {
    opacity: '0',
  },
  firstOpt: {
    extend: circle,
  },
  secondOpt: {
    extend: circle,
  },
  thirdOpt: {
    extend: circle,
  }
}
