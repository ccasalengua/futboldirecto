import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
  
export const SimpleDialog = (props) => {
    const { onClose, open, data } = props;

    const player = data?.player ? data.player : {name: '', firstname:'', lastname: '', birth: {place: '', country:'', date: ''}, age: '', height: '', weight: '', team: ''};
    const statistics =  data?.statistics ? data.statistics[0] : {team: {}, league: {}, games: {position:''}, substitutes: {}, goals: {}, penalty: {}, fouls: {}, shots: {}};

    const handleClose = () => {
      onClose();
    };

    console.log('playerDataDialog: ', player);
    console.log('statisticsDataDialog', statistics)

    const getPosition = (position) => {
      switch (position) {
        case 'Attacker': 
            return 'Delantero'
        case 'Defender': 
            return 'Defensa'
        case 'MidFielder': 
            return 'Defensa'
        default: 
            return '-'
      }
    };

  return (
    <Dialog className="fd-simpledialog" onClose={handleClose} open={open}>
      <DialogTitle className="fd-simpledialog__title"><img className="fd-simpledialog__photo" src={player.photo} alt={player.name}/>{player.name}</DialogTitle>
      <button className="fd-simpledialog__close" onClick={handleClose}>X</button>
      <div>
          <p className="fd-simpledialog__subtitle">Datos Personales</p>
          <dl className="fd-simpledialog__dlist">
            <dt className="fd-simpledialog__dlist-title">Nombre Completo: </dt><dd className="fd-simpledialog__dlist-description">{player.firstname} {player.lastname}</dd>
            <dt className="fd-simpledialog__dlist-title">Pais de nacimiento: </dt><dd className="fd-simpledialog__dlist-description">{player.birth.place} ({player.birth.country})</dd>
            <dt className="fd-simpledialog__dlist-title">Fecha de nacimiento: </dt><dd className="fd-simpledialog__dlist-description">{dayjs(player.birth.date).format('DD/MM/YYYY')}</dd>
            <dt className="fd-simpledialog__dlist-title">Nacionalidad: </dt><dd className="fd-simpledialog__dlist-description">{player.nationality}</dd>
            <dt className="fd-simpledialog__dlist-title">Edad: </dt><dd className="fd-simpledialog__dlist-description">{player.age}</dd>
            <dt className="fd-simpledialog__dlist-title">Lesionado: </dt><dd className="fd-simpledialog__dlist-description">{player.injured ? 'Si' : ' No'}</dd>
            <dt className="fd-simpledialog__dlist-title">Altura: </dt><dd className="fd-simpledialog__dlist-description">{player.height}</dd>
            <dt className="fd-simpledialog__dlist-title">Peso: </dt><dd className="fd-simpledialog__dlist-description">{player.weight}</dd>
            <dt className="fd-simpledialog__dlist-title">Demarcación: </dt><dd className="fd-simpledialog__dlist-description">{getPosition(statistics.games.position)}</dd>
            <dt className="fd-simpledialog__dlist-title">Club actual: </dt><dd className="fd-simpledialog__dlist-description"><img className="fd-simpledialog__logo-team" src={statistics.team.logo} alt={statistics.team.name}/>{statistics.team.name}</dd>
          </dl>
          <p className="fd-simpledialog__subtitle">Estadisticas</p>
          <dl className="fd-simpledialog__dlist">
            <dt className="fd-simpledialog__dlist-title">Goles: </dt><dd className="fd-simpledialog__dlist-description">{statistics.goals.total}</dd>
            <dt className="fd-simpledialog__dlist-title">Asistencias: </dt><dd className="fd-simpledialog__dlist-description">{statistics.goals.assists}</dd>
            <dt className="fd-simpledialog__dlist-title">Tiros a puerta: </dt><dd className="fd-simpledialog__dlist-description">{statistics.shots.total}</dd>
            <dt className="fd-simpledialog__dlist-title">Goles de penalty: </dt><dd className="fd-simpledialog__dlist-description">{statistics.penalty.scored}</dd>
            <dt className="fd-simpledialog__dlist-title">Penalty fallados: </dt><dd className="fd-simpledialog__dlist-description">{statistics.penalty.missed}</dd>
            <dt className="fd-simpledialog__dlist-title">Faltas recibidas: </dt><dd className="fd-simpledialog__dlist-description">{statistics.fouls.draw}</dd>
            <dt className="fd-simpledialog__dlist-title">Faltas hechas: </dt><dd className="fd-simpledialog__dlist-description">{statistics.fouls.committed}</dd>
            <dt className="fd-simpledialog__dlist-title">Partidos jugados: </dt><dd className="fd-simpledialog__dlist-description">{statistics.games.appearences}</dd>
            <dt className="fd-simpledialog__dlist-title">Partidos siendo titular: </dt><dd className="fd-simpledialog__dlist-description">{statistics.games.lineups}</dd>
            <dt className="fd-simpledialog__dlist-title">Minutos Jugados: </dt><dd className="fd-simpledialog__dlist-description">{statistics.games.minutes}</dd>
            <dt className="fd-simpledialog__dlist-title">Partidos sustituidos: </dt><dd className="fd-simpledialog__dlist-description">{statistics.substitutes.out}</dd>
            <dt className="fd-simpledialog__dlist-title">Partidos jugados como sustituto: </dt><dd className="fd-simpledialog__dlist-description">{statistics.substitutes.in}</dd>

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