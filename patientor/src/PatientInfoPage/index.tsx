import { Box, List, ListItem, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { setPatientInfo, useStateValue } from "../state";
import { Patient } from "../types";


const PatientInfoPage = () => {
    const { id } = useParams<{ id: string }>();
    const [{ patient }, dispatch] = useStateValue();
    useEffect(() => {
        if (id) {
            const fetchPatientInfo = async () => {
                try {
                  const { data: patientInfoFromApi } = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${id}`
                  );
                  dispatch(setPatientInfo(patientInfoFromApi));
                } catch (e) {
                  console.error(e);
                }
              };
              void fetchPatientInfo();
        }
    }, [id])
    if (!patient || Object.keys(patient).length === 0) return null
    console.log(patient)
    return (
        <div className="PatientInfo">
            <Box marginTop={'2em'}>
                <Typography align="left" variant="h5" style={{ fontWeight: 700 }}>
                    {`${patient["data"].name} ${patient["data"].gender === "male" ? `♂` :  patient["data"].gender === "female" ? `♀` : `⚥`}`}
                </Typography>
                <Typography align="left" style={{ marginTop: "1em" }}>
                    {`ssn: ${patient["data"].ssn}`}
                </Typography>
                <Typography align="left">
                    {`occupation: ${patient["data"].occupation}`}
                </Typography>
            </Box>
            <Box marginTop={'2em'}>
                <Typography variant="h4">{'entries'}</Typography>
                <Typography align="left" style={{ marginTop: "1em" }}>
                    {patient["data"].entries.map(entry => {
                        return (
                            <Box>
                            <Typography>{entry.date}</Typography>
                            <Typography>{entry.description}</Typography>
                            <List>
                                {entry.diagnosisCodes ? entry.diagnosisCodes.map(code => <ListItem>{code}</ListItem>) : null}
                            </List>
                            <Typography>{`diagnosed by ${entry.specialist}`}</Typography>
                        </Box>
                        )
                    })}
                </Typography>
            </Box>
        </div>
    );
};

export default PatientInfoPage;

