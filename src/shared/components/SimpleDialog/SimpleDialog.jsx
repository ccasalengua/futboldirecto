import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
  
export const SimpleDialog = (props) => {
    const { onClose, open, data } = props;

    const handleClose = () => {
      onClose();
    };

    console.log('playerDataDialog: ', data)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{data.name}</DialogTitle>
      <button className="fd-simpledialog-close" onClick={handleClose}>X</button>
      <div>
          <dl>
            <dt>Nombre Completo: </dt><dd>{data.firstname + data.lastname}</dd>
            <dt>Pais de nacimiento: </dt><dd>{data.birth.place} ({data.birth.country})</dd>
            <dt>Fecha de nacimiento: </dt><dd>{dayjs(data.birth.date).format('DD/MM/YYYY')}</dd>
            <dt>Edad: </dt><dd>{data.age}</dd>
            <dt>Demarcación: </dt><dd>{data.age}</dd>
            <dt>Altura: </dt><dd>{data.height}</dd>
            <dt>Peso: </dt><dd>{data.weight}</dd>
            <dt>Club actual: </dt><dd>{data.team}</dd>
          </dl>
      </div>
        
    </Dialog>
  )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    data: PropTypes.object,
  };