import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
    return (
        <FormGroup>
            <FormControlLabel sx={{
                '& .MuiSvgIcon-root': {
                    borderRadius: 10, width: 20, height: 20, color: "#62C3C6"
                }
            }}
                control={<Checkbox defaultChecked />} label="ADREXpharma" />
            <FormControlLabel sx={{
                '& .MuiSvgIcon-root': {
                    borderRadius: 10, width: 20, height: 20, color: "#62C3C6"
                }
            }} control={<Checkbox />} label="Aurora" />
            <FormControlLabel sx={{
                '& .MuiSvgIcon-root': {
                    borderRadius: 10, width: 20, height: 20, color: "#62C3C6"
                }
            }} control={<Checkbox />} label="Avaay" />
            <FormControlLabel sx={{
                '& .MuiSvgIcon-root': {
                    borderRadius: 10, width: 20, height: 20, color: "#62C3C6"

                }
            }} control={<Checkbox />} label="Bedrocan" />
            <FormControlLabel sx={{
                '& .MuiSvgIcon-root': {
                    borderRadius: 10, width: 20, height: 20, color: "#62C3C6"

                }
            }} control={<Checkbox />} label="Cannamedical" />
        </FormGroup>
    );
}
// width: 16px;
// height: 16px;
// gap: 0px;
// border-radius: 5.33px 0px 0px 0px;
// opacity: 0px;
