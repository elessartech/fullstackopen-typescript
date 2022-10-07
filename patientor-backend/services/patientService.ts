import patientData from '../data/patients.json';

import { PatientEntry, NonSensitivePatientEntry } from '../types'

const getEntries = (): PatientEntry[] => {
    return patientData;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));
};

const addDiagnose = () => {
    return null;
};

export default {
  getEntries,
  getNonSensitivePatientEntry,
  addDiagnose
};