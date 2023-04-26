import './keyfacts.scss'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { red } from '@mui/material/colors';

const KeyFacts = () => {
  return (
    <div className='keyfactsContainer'>
      <div>
        <BedroomBabyIcon sx={{ color: red[700], fontSize: 30 }}/>
        <h5>Over 500</h5>
        <p>Horse Racing Fixtures Annually</p>
      </div>
      <div className='locationWrapper'>
        <LocationOnIcon sx={{ color: red[700], fontSize: 30 }}/>
        <h5>21</h5>
        <p>Venues Across The UK</p>
      </div>
      <div>
        <Diversity3Icon sx={{ color: red[700], fontSize: 30 }} />
        <h5>12 million</h5>
        <p>Racegoers Each Year</p>
      </div>
    </div>
  )
}

export default KeyFacts;
