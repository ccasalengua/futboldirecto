import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { Loading } from '../../Loading/Loading';
import dayjs from 'dayjs';
  
export const DriverDialog = (props) => {
    const { onClose, open, data, isLoadingTeam } = props;

    const driver = data ? data : {teams: []};
  

    console.log(driver)


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
        <img className="fd-simpledialog__photo-team" src={driver.image} alt={driver.name}/>
        <div className="fd-simpledialog__player-info">
          <p className="fd-simpledialog__player-name"><span className="fd-simpledialog__driver-number">{driver.number} </span> {driver.name}</p>
          <p className="fd-simpledialog__player-team"><img className="fd-simpledialog__logo-team" src={driver.teams[0].team.logo} alt={driver.teams[0].team.name}/>{driver.teams[0].team.name}</p>
        </div>

      </DialogTitle>
      <button className="fd-simpledialog__close" onClick={handleClose}>X</button>
      <div className="fd-simpledialog__content">
          <p className="fd-simpledialog__subtitle">Datos Personales:</p>
          <dl className="fd-simpledialog__dlist">
            <dt className="fd-simpledialog__dlist-title">Nombre: </dt><dd className="fd-simpledialog__dlist-description">{driver.name}</dd>
            <dt className="fd-simpledialog__dlist-title">Nacionalidad: </dt><dd className="fd-simpledialog__dlist-description">{driver.nationality}</dd>
            <dt className="fd-simpledialog__dlist-title">Fecha de nacimiento: </dt><dd className="fd-simpledialog__dlist-description">{dayjs(driver.birthdate).format('DD/MM/YYYY')}</dd>
            <dt className="fd-simpledialog__dlist-title">Lugar de nacimiento: </dt><dd className="fd-simpledialog__dlist-description">{driver.birthplace}</dd>
            <dt className="fd-simpledialog__dlist-title">Edad: </dt><dd className="fd-simpledialog__dlist-description">{dayjs().diff(driver.birthdate, 'y')}</dd>
          </dl>
          <p className="fd-simpledialog__subtitle">Estadisticas:</p>
          <dl className="fd-simpledialog__dlist">
            <dt className="fd-simpledialog__dlist-title">Equipo Actual: </dt><dd className="fd-simpledialog__dlist-description"> {driver.teams[0].team.name}</dd>
            <dt className="fd-simpledialog__dlist-title">Posición actual en la clasificación: </dt><dd className="fd-simpledialog__dlist-description"> {driver.position}</dd>
            <dt className="fd-simpledialog__dlist-title">Campeonatos ganados: </dt><dd className="fd-simpledialog__dlist-description"> {driver.world_championships}</dd>
            <dt className="fd-simpledialog__dlist-title">Podiums conseguidos: </dt><dd className="fd-simpledialog__dlist-description"> {driver.podiums}</dd>
            <dt className="fd-simpledialog__dlist-title">Puntos conseguidos: </dt><dd className="fd-simpledialog__dlist-description"> {driver.career_points}</dd>
            <dt className="fd-simpledialog__dlist-title">Mejor posición en su carrera: </dt><dd className="fd-simpledialog__dlist-description"> {driver.highest_race_finish.position}</dd>
            <dt className="fd-simpledialog__dlist-title">Veces en su mejor posición: </dt><dd className="fd-simpledialog__dlist-description">{driver.highest_race_finish.number}</dd>
            <dt className="fd-simpledialog__dlist-title">Participación en grandes premios: </dt><dd className="fd-simpledialog__dlist-description">{driver.grands_prix_entered}</dd>
          </dl>
                   
      </div>
        
    </Dialog>
  )
}

DriverDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    data: PropTypes.object,
    isLoadingTeam: PropTypes.bool
  };