export const styles = {
  navigationMenu: {
    position: 'fixed',
    bottom: '0px',
    top: '0px',
    left: '100%',
    width: '300px',
    backgroundColor: '#0C0C0C',
    zIndex: '1',
    transition: '0.6s ease',

    '@media (min-width: 720px)': {
      width: '400px'
    }
  },
  display: {
    transform: 'translate3d(-300px, 0px, 0px)',

    '@media (min-width: 720px)': {
      transform: 'translate3d(-400px, 0px, 0px)'
    }
  },
  menuContainer: {
    color: '#FFFFFF',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textAlign: 'center'
  },
  highlightLink: {
    color: '#FFFFFF'
  },
  link: {
    textDecoration: 'none',
    color: '#7F7F7F',
    fontSize: '28px',
    transition: '0.3s ease all',

    ':hover': {
      color: '#FFFFFF'
    }
  },
  linkContainer: {
    margin: '35px auto',
    opacity: '0'
  }
}
