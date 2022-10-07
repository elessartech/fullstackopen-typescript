import patientData from '../data/patients.json';
import { v1 as uuid } from 'uuid'

import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types'

const getEntries = (): PatientEntry[] => {
    return patientData;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));
};

const addPatient = ( entry: NewPatientEntry ): PatientEntry => {
    const newPatientEntry = {
        id: uuid(),
        ...entry
      };
      patientData.push(newPatientEntry);
      return newPatientEntry;
};

export default {
  getEntries,
  getNonSensitivePatientEntry,
  addPatient
};