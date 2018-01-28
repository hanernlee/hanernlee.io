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
    backgroundColor: Color.green,
    zIndex: '2',
  }
}
