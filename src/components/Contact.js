import React, { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";
import contact from "util/contact";

function Contact(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    contact
      .submit(data)
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <>
      {formAlert && (
        <Box mb={3}>
          <Alert severity={formAlert.type}>{formAlert.message}</Alert>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
          {props.showNameField && (
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                name="name"
                error={errors?.name ? true : false}
                helperText={errors?.name && errors.name.message}
                fullWidth={true}
                {...register("Please enter your name", { required: true })}
              />
            </Grid>
          )}

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              name="email"
              error={errors?.email ? true : false}
              helperText={errors?.email && errors.email.message}
              fullWidth={true}
              {...register("Please enter your email", { required: true })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              variant="outlined"
              type="text"
              label="Message"
              name="message"
              multiline={true}
              rows={5}
              error={errors?.message ? true : false}
              helperText={errors?.message && errors.message.message}
              fullWidth={true}
              {...register("Please enter a message", { required: true })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={pending}
            >
              {!pending && <span>{props.buttonText}</span>}

              {pending && <CircularProgress size={28} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Contact;
