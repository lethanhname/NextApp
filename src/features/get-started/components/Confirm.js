import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

export default function Confirm({formData}) {
  const handleSubmit = () => {
    // Remove unwanted properties from formValue object

    // Do whatever with the values
    console.log(formData);
    // Show last component or success message
  }
  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={formData.name || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={formData.company || 'Not Provided'}
          />
        </ListItem>

      </List>

      <div
        style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}
      >
        
        <Button
          style={{ marginLeft: 10 }}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </>
  )
}
