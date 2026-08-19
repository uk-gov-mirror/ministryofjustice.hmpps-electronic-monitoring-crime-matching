import { WGS84Crime } from '../../types/crime'
import PoliceForceArea from '../../types/policeForceArea'
import createRandomCrime from './createRandomCrime'
import {landmarks} from './createRandomLandmark'


const createCrimeAtLandmarkByIndex = (
    pfa: PoliceForceArea,
    batchId: string,
    index: number
): WGS84Crime => {
  const crime = createRandomCrime(pfa, batchId, 'WGS84')
  const landmark = landmarks[index % landmarks.length]

  return {
    ...crime,
    easting: null,
    northing: null,
    latitude: landmark.latitude,
    longitude: landmark.longitude,
    crimeText: landmark.name,
    datum: 'WGS84',
  }
}

export default createCrimeAtLandmarkByIndex
