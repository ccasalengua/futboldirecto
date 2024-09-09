import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
  
export const SimpleDialog = (props) => {
    const { onClose, open, data } = props;

    const player = data ? data : [{name: '', firstname:'', lastname: '', birth: {place: '', country:'', date: ''}, age: '', height: '', weight: '', team: ''}];

    const handleClose = () => {
      onClose();
    };

    console.log('playerDataDialog: ', data)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{player.name}</DialogTitle>
      <button className="fd-simpledialog-close" onClick={handleClose}>X</button>
      <div>
          <dl>
            <dt>Nombre Completo: </dt><dd>{player.firstname + player.lastname}</dd>
            {/* <dt>Pais de nacimiento: </dt><dd>{player.birth.place} ({player.birth.country})</dd> */}
            {/* <dt>Fecha de nacimiento: </dt><dd>{dayjs(player.birth.date).format('DD/MM/YYYY')}</dd> */}
            <dt>Edad: </dt><dd>{player.age}</dd>
            <dt>Demarcación: </dt><dd>{player.age}</dd>
            <dt>Altura: </dt><dd>{player.height}</dd>
            <dt>Peso: </dt><dd>{player.weight}</dd>
            <dt>Club actual: </dt><dd>{player.team}</dd>
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