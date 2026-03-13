import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){

  const INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=" ;

  const HOT_URL = "https://media.istockphoto.com/id/474966771/photo/seascape-and-sun-on-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=C7YsMxXWispuCnk_AmxnmvL1U4wYefXv3g_xed6pga4=";

  const COLD_URL = "https://images.unsplash.com/photo-1702550136226-d3e77e1cdab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";

  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";



  return (
    <div className="InfoBox">
      <div className='cardContainer'>
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
          }
          title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{"  "} {
            info.humidity > 80
            ? ( <ThunderstormIcon /> )
            : info.temp > 15
            ? ( <SunnyIcon /> )
            : ( <AcUnitIcon /> )
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>Max Temperature = {info.tempMax}&deg;C</p>
          <p>Min Temperature = {info.tempMin}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels Like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}