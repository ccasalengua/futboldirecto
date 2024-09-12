import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { Loading } from '../../Loading/Loading';
  
export const TeamDialog = (props) => {
    const { onClose, open, data, isLoadingTeam } = props;

    const team = data?.team ? data.team : {id: 0, name: '', code: '', country: '',founded: 0, national: false, logo: ''};
    const venue =  data?.venue ? data.venue : {id: 0, name: '', address: '', city: '', capacity: 0, surface: '', image: ''};

    const handleClose = () => {
      onClose();
    };

    if (isLoadingTeam) {
      return (
        <Dialog className="fd-simpledialog" onClose={handleClose} open={open}>
          <Loading></Loading>
        </Dialog>
      )
  }

  return (
    <Dialog className="fd-simpledialog" onClose={handleClose} open={open}>
      <DialogTitle className="fd-simpledialog__title">
        <img className="fd-simpledialog__photo-team" src={team.logo} alt={team.name}/>
        <div className="fd-simpledialog__player-info">
          <p className="fd-simpledialog__player-name">{team.name}</p>
          <p className="fd-simpledialog__player-position">Fundado en: {team.founded}</p>
        </div>

      </DialogTitle>
      <button className="fd-simpledialog__close" onClick={handleClose}>X</button>
      <div className="fd-simpledialog__content">
          <p className="fd-simpledialog__subtitle">Estadio</p>
          <dl className="fd-simpledialog__dlist">
            <dt className="fd-simpledialog__dlist-title">Nombre: </dt><dd className="fd-simpledialog__dlist-description">{venue.name}</dd>
            <dt className="fd-simpledialog__dlist-title">Direccion: </dt><dd className="fd-simpledialog__dlist-description">{venue.address}</dd>
            <dt className="fd-simpledialog__dlist-title">Ciudad: </dt><dd className="fd-simpledialog__dlist-description"> {venue.city}</dd>
            <dt className="fd-simpledialog__dlist-title">Capacidad: </dt><dd className="fd-simpledialog__dlist-description">{venue.capacity}</dd> 
          </dl>

          <p className="fd-simpledialog__venue-box"><img className="fd-simpledialog__venue-img" src={venue.image} alt={venue.name}/></p>
          
      </div>
        
    </Dialog>
  )
}

TeamDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    data: PropTypes.object,
    isLoadingTeam: PropTypes.bool
  };