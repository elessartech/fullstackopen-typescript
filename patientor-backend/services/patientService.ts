import patientData from '../data/patients';
import { v1 as uuid } from 'uuid'

import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types'

import { toNewPatientEntry } from '../utils'

const getEntries = (): PatientEntry[] => {
    return patientData;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({id, name, dateOfBirth, gender, occupation, entries}));
};

const getPatientEntry = (patientId: string): PatientEntry | undefined => {
    return patientData.find(({id}) => (patientId === id));
}

const addPatient = ( entry: NewPatientEntry ): PatientEntry => {
    const id = uuid()
    const newPatientEntry = toNewPatientEntry(id, entry.name, entry.dateOfBirth, entry.ssn, entry.gender, entry.occupation, []);
    patientData.push(newPatientEntry);
    return newPatientEntry;
};

export default {
  getEntries,
  getNonSensitivePatientEntry,
  addPatient,
  getPatientEntry
};