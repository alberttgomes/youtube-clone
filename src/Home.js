import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Drawer,
    Typography,
    Divider,
    List,
    Grid,
    Box,
    Hidden,
    ListItemIcon,
    ListItem,
    ListItemText,
    ListSubheader,
    IconButton,
    Button,
    Switch,
  } from '@material-ui/core';
  
  import { useTheme } from '@material-ui/core/styles';
  import MenuIcon from '@material-ui/icons/Menu';
  import AccountCircle from '@material-ui/icons/AccountCircle';

  import Apps from '@material-ui/icons/Apps';
  import MoreVert from '@material-ui/icons/MoreVert';

  import HomeIcon from '@material-ui/icons/Home';
  import Subscriptions from '@material-ui/icons/Subscriptions';
  import Explore from '@material-ui/icons/Explore';
  import VideoLibrary from '@material-ui/icons/VideoLibrary';
  import HistoryIcon from '@material-ui/icons/History';
  
  import AddCircle from '@material-ui/icons/AddCircle';
  import QueueMusic from '@material-ui/icons/QueueMusic';
  import SportsSoccer from '@material-ui/icons/SportsSoccer';
  import SportsEsports from '@material-ui/icons/SportsEsports';
  import LocalMovies from '@material-ui/icons/LocalMovies';
  import Assignment from '@material-ui/icons/Assignment';
  import LiveTv from '@material-ui/icons/LiveTv';
  import YouTube from '@material-ui/icons/YouTube';
  import Streetview from '@material-ui/icons/Streetview';
  import CheckCircle from '@material-ui/icons/CheckCircle';
 
  

const useStyles = makeStyles ((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100vh'
    },
    appBar:{
      boxShadow:'none',
      zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuIcon: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(3),
    },
    icons: {
      paddingRight:theme.spacing(3),
    },
    logo: {
      height:30,
    },
    drawer: {
      width: 225,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 225,
      borderRight:'none',
    },
    listItemText: {
      fontSize: 14,
    },
    listItem: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: theme.spacing(3),
    },
    CheckCircle: {
      width:5,
    }
    
 }));

 const videos = [
  {
    id: 1,
    title:
      'JOÃO GOMES - METE UM BLOCK NELE',
    channel: 'Forró',
    views: '11 mi de visualizações',
    date: 'há 3 dias',
    thumb: '/imagens/joaogomes.png',
  },
  {
    id: 2,
    title:
      'CURSO DE JAVASCRIPT, REACT E MATERIAL-UI',
    channel: 'Gustavo Guanabara',
    views: '957 mil de visualizações',
    date: 'há 2 semana',
    thumb: '/imagens/gustavoguanabara.jpg',
  },
  {
    id: 3,
    title:
      'Young Thug - Droppin Jewels [Official Audio]',
    channel: 'Young Thug',
    views: '106 mil de visualizações',
    date: 'há 1 mês',
    thumb: '/imagens/YoungThug.png',
  },
  {
    id: 4,
    title:
      'BRASIL 4 X 1 URUGUAI | MELHORES MOMENTOS | 12ª RODADA ELIMINATÓRIAS DA COPA | ge.globo',
    channel: 'ge',
    views: '5,6 mi de visualizações',
    date: 'há 5 dias',
    thumb: '/imagens/Brasil X Uruguai.png',
  },
  {
    id: 5,
    title:
      'House Of The Dragon | Official Teaser | HBO Max',
    channel: 'HBO Brasil',
    views: '2,2 mi de visualizações',
    date: 'há 3 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/imagens/HouseOfDragons.png',
  },
  {
    id: 6,
    title: 'MC RYAN SP - GOOGLE DA MINHA VIDA',
    channel: 'GR6 Explode',
    views: '13 milhões de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/imagens/GoogledaMinhaVida.png',
  },
  {
    id: 7,
    title:
      'Dragon Ball Super | Broly',
    channel: 'Animes On',
    views: '118 mil de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/imagens/DragonBallSuper.png',
  },
  {
    id: 8,
    title:
      'IRRITANDO ESTRANHOS NA RUA : MANDE A SUA #213',
    channel: 'Ta Gravando',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/imagens/TaGravando.png',
  },
];

export default function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return ( 
    <div className ={classes.root}>
       <AppBar color = 'inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
          <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/imagens/logo.png'
                : '/imagens/logoPreto.png'
            } 
            alt = 'Logo'
            className = {classes.logo}
          />
          <div className = {classes.grow}/>
          <Switch 
            value = { darkMode }
            onChange={() => setDarkMode(!darkMode)}
            className = {classes.icons}
          />
          <IconButton className = {classes.icons} >
            <Apps />
          </IconButton>
          <IconButton className = {classes.icons} >
            <MoreVert />
          </IconButton>
          <Button startIcon={<AccountCircle />} variant= 'outlined' color="secondary">
            Fazer Login
          </Button>
        </Toolbar>
       </AppBar>
       <Box display='flex'>
        <Hidden mdDown> 
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
            paper: classes.drawerPaper,
            }}
        >
       <Toolbar />
       <div className={classes.drawerContainer}>
          <List>
           <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
             <ListItemText
               classes={{
                 primary:classes.listItemText,
               }}
               primary={ 'Inicio' }
             />
           </ListItem>
           <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon>{<Explore />}</ListItemIcon>
             <ListItemText
               classes={{
                 primary:classes.listItemText,
               }}
               primary={ 'Explorar' }
             />
           </ListItem>  
           <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon>{<Subscriptions/>}</ListItemIcon>
             <ListItemText
               classes={{
                 primary:classes.listItemText,
               }}
               primary={ 'Inscrições' }
             />
           </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{root: classes.listItem}}>
             <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary:classes.listItemText,
                }}
                primary={ 'Biblioteca' }
              />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
             <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary:classes.listItemText,
                }}
                primary={ 'Histórico' }
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={5}>
           <Typography variant='body2'>
             Faça login para curtir vídeos, comentar e se inscrever.
           </Typography>
           <Box mt={2}>
            <Button startIcon={<AccountCircle />} variant= 'outlined' color="secondary">
              Fazer Login
            </Button>
           </Box>
           </Box>
           <Divider />
           <List
             component= 'nav'
             arial-labelledby='nested-list-subheader'
             subheader={
               <ListSubheader
                 component='div'
                 id='nested-list-subheader'
                 className={classes.subheader}
               >
                    O MELHOR DO YOUTUBE
               </ListSubheader>   
             } 
            >
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <QueueMusic />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Música' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <SportsSoccer />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Esportes' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <SportsEsports />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Jogos' }
                 />
               </ListItem>         
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <LocalMovies />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Filmes' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <Assignment />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Notícias' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <LiveTv />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Ao vivo' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <YouTube />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Vídeos do momento' }
                 />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                 <ListItemIcon>
                  <Streetview />
                 </ListItemIcon>
                 <ListItemText
                   classes={{
                     primary:classes.listItemText,
                   }}
                   primary = { 'Vídeos em 360°' }
                 />
               </ListItem>
           </List>
               <Divider />
               <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={' Procurar mais '}
                />
              </ListItem>
              <Divider />
              
          </div>       
         </Drawer>
        </Hidden> 
        
      <Box p={8}>
       <Toolbar />
       <Typography
        variant = 'h5'
        color = 'textPrimary'
        style = {{ fontWeight: 500 }}
       >
         Em alta
       </Typography>
       <Toolbar />
       <Grid container spacing={4}>
        {videos.map((item, index) => (
          <Grid item lg={3} md= {4} sm ={6} xs={12}>
           <Box>
            <img
             style = {{ width: '100%' }}
             alt = {item.title}
             src = {item.thumb}
            />
            <Box>
              <Typography
                style = {{ fontWeight: 500 }}
                gutterBottom
                variant = 'body1'
                color = 'textPrimary'
              >
               {item.title}
              </Typography>
              <Typography
                display = 'block'
                variant = 'body2'
                color = 'textSecondary'
              >
                {item.channel}
                
              </Typography>
              <Typography
                variant = 'body2'
                color = 'textSecondary'
              >
                {`${item.views} • ${item.date}`}
              </Typography>
              </Box>
             </Box>
            </Grid>             
          ))} 
         </Grid>
        </Box>
       </Box>    
     </div>
    );
}