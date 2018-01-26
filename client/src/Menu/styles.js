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
    position: 'absolute',
    backgroundColor: '#24D8A6',
    bottom: '25px',
    right: '25px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    borderRadius: '50%'
  },
  plus: {
  },
  firstOpt: {
    extend: circle,
    transform: 'translateX(-150px)',
  },
  secondOpt: {
    extend: circle,
    transform: 'translate(-100px, -100px)',
  },
  thirdOpt: {
    extend: circle,
    transform: 'translateY(-150px)',
  }
}
