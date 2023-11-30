import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from 'components/Button/Button';
import Close from '../../images/close.svg';
import { CloseIcon, IconX, Image, Wrapper } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  maxHeight: 830,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
};

export default function MainModal({ open, onClose, data }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper>
            <CloseIcon onClick={onClose}>
              <IconX src={Close} />
            </CloseIcon>
            <Image scr={data.img} alt={data.make} width="461" height="248" />
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
