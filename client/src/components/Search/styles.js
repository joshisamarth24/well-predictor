import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  searchButton: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  geoButton: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;


