export const color = {
  primary: '#01bf71',
  dark1:{
    fg: '#020C0C',
    bg: '#020C0C'
  },
  light1:{
    fg: '#f7f8fa',
    bg: '#f7f8fa'
  }
};

export const convertHexToRgba = (hexCode,opacity) => {
  let hex = hexCode.replace('#', '');
    
  if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }    
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};