
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { CopyToClipboard } from 'react-copy-to-clipboard'


import {
  TextField,
  Box,
  Button,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  Container,
  Divider,
  CardContent,
  OutlinedInput,
  Typography,
} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({

}));
function TicketForm(props) {
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [issue, setIssue] = React.useState("");
  const [troubleShooting, setTroubleShooting] = React.useState("");
  const [knowledgeUtilized, setKnowledgeUtilized] = React.useState("");
  const [reqInfoPerKb, setReqInfoPerKb] = React.useState("");
  const [resolution, setResolution] = React.useState("");
  const [screenshotsIncluded, setScreenShotsIncluded] = React.useState("");

  React.useEffect(() => {

  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container
        style={{ margin: "auto", marginTop: 5 }}
        spacing={1}>
        <Grid
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid black",
            padding: 10
          }}
          item
          xs={6}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                multiline
                maxRows={4}
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Phone"
                multiline
                maxRows={4}
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Issue"
                multiline
                rows={2}
                maxRows={8}
                value={issue}
                onChange={(event) => {
                  setIssue(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="TroubleShooting"
                multiline
                rows={2}
                maxRows={8}
                value={troubleShooting}
                onChange={(event) => {
                  setTroubleShooting(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Knowledge Utilized"
                multiline
                rows={2}
                maxRows={8}
                value={knowledgeUtilized}
                onChange={(event) => {
                  setKnowledgeUtilized(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Required Information Per Kb"
                multiline
                rows={2}
                maxRows={8}
                value={reqInfoPerKb}
                onChange={(event) => {
                  setReqInfoPerKb(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Resolution"
                multiline
                rows={2}
                maxRows={8}
                value={resolution}
                onChange={(event) => {
                  setResolution(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="ScreenShots Included"
                multiline
                rows={2}
                maxRows={8}
                value={screenshotsIncluded}
                onChange={(event) => {
                  setScreenShotsIncluded(event.target.value)
                }}
              />
            </Grid>
            <Grid container item spacing={1} xs={12}>
              <Grid item xs={12}
              >
                <Button
                  onClick={() => {
                    setName("")
                    setPhone("")
                    setIssue("")
                    setTroubleShooting("")
                    setKnowledgeUtilized("")
                    setReqInfoPerKb("")
                    setResolution("")
                    setScreenShotsIncluded("")
                  }}
                  variant="filled" fullWidth style={{ backgroundColor: "red" }}>Reset</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6}
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid black",
            padding: 10
          }}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              value={
                `
Name: ${name}
Phone: ${phone}
Issue: ${issue}
Troubleshooting: ${troubleShooting}
Knowledge utilized: ${knowledgeUtilized}
Required information per KB: ${reqInfoPerKb} 
Resolution: ${resolution}
Screenshots included: ${screenshotsIncluded} 
`

              }
              onChange={(event) => {
                setTroubleShooting(event.target.value)
              }}
            />
          </Grid>
      
          <Grid item xs={12}>
            <CopyToClipboard
              // onCopy={}
              text={
                `
Name: ${name}
Phone: ${phone}
Issue: ${issue}
Troubleshooting: ${troubleShooting}
Knowledge utilized: ${knowledgeUtilized}
Required information per KB: ${reqInfoPerKb} 
Resolution: ${resolution}
Screenshots included: ${screenshotsIncluded} 
`
              }
            >
              <Button variant="filled" fullWidth style={{ backgroundColor: "blue" }}>
                Copy to Clipboard
              </Button>
            </CopyToClipboard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TicketForm;

// import React from "react";

// import { useSelector, useDispatch } from "react-redux";

// import { CopyToClipboard } from 'react-copy-to-clipboard'


// import {
//   TextField,
//   Box,
//   Button,
//   Grid,
//   makeStyles,
//   Card,
//   CardHeader,
//   Container,
//   Divider,
//   CardContent,
//   OutlinedInput,
//   Typography,
// } from "@material-ui/core";

// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';




// const useStyles = makeStyles((theme) => ({

// }));
// toast.configure({
//   autoClose: 1000,
//   hideProgressBar: false,
//   closeOnClick: true,
// });

// function TicketForm(props) {
//   const classes = useStyles();

//   const [name, setName] = React.useState("");
//   const [phone, setPhone] = React.useState("");
//   const [issue, setIssue] = React.useState("");
//   const [troubleShooting, setTroubleShooting] = React.useState("");
//   const [knowledgeUtilized, setKnowledgeUtilized] = React.useState("");
//   const [reqInfoPerKb, setReqInfoPerKb] = React.useState("");
//   const [resolution, setResolution] = React.useState("");
//   const [screenshotsIncluded, setScreenShotsIncluded] = React.useState("");

//   React.useEffect(() => {

//   }, []);

//   return (
//     <Container maxWidth="xl">
//       <Grid container
//         style={{ margin: "auto", marginTop: 5 }}
//         spacing={1}>
//         <Grid
//           style={{
//             backgroundColor: "lightgrey",
//             border: "2px solid black",
//             padding: 10
//           }}
//           item
//           xs={6}
//         >
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Name"
//                 multiline
//                 maxRows={4}
//                 value={name}
//                 onChange={(event) => {
//                   setName(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Phone"
//                 multiline
//                 maxRows={4}
//                 value={phone}
//                 onChange={(event) => {
//                   setPhone(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Issue"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={issue}
//                 onChange={(event) => {
//                   setIssue(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="TroubleShooting"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={troubleShooting}
//                 onChange={(event) => {
//                   setTroubleShooting(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Knowledge Utilized"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={knowledgeUtilized}
//                 onChange={(event) => {
//                   setKnowledgeUtilized(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Required Information Per Kb"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={reqInfoPerKb}
//                 onChange={(event) => {
//                   setReqInfoPerKb(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Resolution"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={resolution}
//                 onChange={(event) => {
//                   setResolution(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="ScreenShots Included"
//                 multiline
//                 rows={2}
//                 maxRows={8}
//                 value={screenshotsIncluded}
//                 onChange={(event) => {
//                   setScreenShotsIncluded(event.target.value)
//                 }}
//               />
//             </Grid>
//             <Grid container item spacing={1} xs={12}>
//               <Grid item xs={12}
//               >
//                 <Button
//                   onClick={() => {
//                     setName("")
//                     setPhone("")
//                     setIssue("")
//                     setTroubleShooting("")
//                     setKnowledgeUtilized("")
//                     setReqInfoPerKb("")
//                     setResolution("")
//                     setScreenShotsIncluded("")
//                   }}
//                   variant="filled" fullWidth style={{ backgroundColor: "red" }}>Reset</Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid container item xs={6}
//           style={{
//             backgroundColor: "lightgrey",
//             border: "2px solid black",
//             padding: 10
//           }}
//         >
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               multiline
//               variant="outlined"
//               value={
//                 `
// Name: ${name}
// Phone: ${phone}
// Issue: ${issue}
// Troubleshooting: ${troubleShooting}
// Knowledge utilized: ${knowledgeUtilized}
// Required information per KB: ${reqInfoPerKb} 
// Resolution: ${resolution}
// Screenshots included: ${screenshotsIncluded} 
// `

//               }
//               onChange={(event) => {
//                 setTroubleShooting(event.target.value)
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <CopyToClipboard
//               onCopy={() => toast.success("Copied!")}
//               text={
//                 `
// Name: ${name}
// Phone: ${phone}
// Issue: ${issue}
// Troubleshooting: ${troubleShooting}
// Knowledge utilized: ${knowledgeUtilized}
// Required information per KB: ${reqInfoPerKb} 
// Resolution: ${resolution}
// Screenshots included: ${screenshotsIncluded} 
// `
//               }
//             >
//               <Button variant="filled" fullWidth style={{ backgroundColor: "blue" }}>
//                 Copy to Clipboard
//               </Button>
//             </CopyToClipboard>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default TicketForm;
