import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    searchBox:{
      width:"100%",
      maxWidth:"400px",
      padding:"16px",
      backgroundColor: "#ffffff"
    }


  }));