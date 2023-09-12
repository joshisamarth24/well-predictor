import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(2,1),
    marginBottom: theme.spacing(2),
    width:'50vw',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
    borderRadius:'30%',
  },
  searchButton: {
    width: '10%',
    marginBottom: theme.spacing(1),
    marginLeft:theme.spacing(1),
  },
  geoButton: {
    width: '10%',
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;


