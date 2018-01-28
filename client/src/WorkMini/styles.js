import { Color } from '../color.js';

export const styles = {
  baseWorkMini: {
    width: '100%',
    height: '100%',
    backgroundImage: props => `linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    boxShadow: 'rgba(0, 0, 0, 0.3) 10px 10px 20px',
    transition: 'transform 0.35s',
    transform: 'scale(1.5)',
    '&:hover': {
      transform: 'scale(1)',
    }
  }
}
