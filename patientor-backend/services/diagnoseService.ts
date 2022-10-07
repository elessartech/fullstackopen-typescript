import diagnoseData from '../data/diagnoses.json';

import { DiagnoseEntry } from '../types'

const getEntries = (): DiagnoseEntry[] => {
  return diagnoseData;
};

const addDiagnose = () => {
  return null;
};

export default {
  getEntries,
  addDiagnose
};