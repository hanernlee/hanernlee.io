import { Color } from '../color.js';

export const styles = {
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    border: `1px solid ${Color.blue}`,
    '@media (max-width: 450px)': {
      fontSize: '36px',
    },
  },
  headline: {
    display: 'block',
    fontSize: '18px',
  },
}
