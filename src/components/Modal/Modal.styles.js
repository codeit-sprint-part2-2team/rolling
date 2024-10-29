export const styledModal = {
  overlay: {
    width: '100%',
    height: '100vh',
    zIndex: '10',

    position: 'fixed',
    top: '0',
    left: '0',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  //임의의 content 문서
  content: {
    width: '360px',
    height: '180px',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'auto',
  },
};