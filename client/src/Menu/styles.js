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
    backgroundColor: '#24D8A6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    borderRadius: '50%'
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
