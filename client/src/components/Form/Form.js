import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const handleSubmit = (event) => {
  
  }

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create Memory</Typography>

        {/* Input Fields */}

        <TextField name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={event => setPostData({ ...postData, creator: event.target.value })}
        />
        <TextField name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={event => setPostData({ ...postData, title: event.target.value })}
        />
        <TextField name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={event => setPostData({ ...postData, message: event.target.value })}
        />
        <TextField name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={event => setPostData({ ...postData, tags: event.target.value })}
        />

        {/* Attach a file */}

        <div className={classes.fileInput}>
          <FileBase type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        {/* Form Buttons */}
        <Button className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button variant="contained"
          color="secondary"
          size="large"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form;
