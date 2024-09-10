export const getPosition = (position) => {
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
