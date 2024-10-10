import * as React from "react";
import { AppProvider } from "@toolpad/core"; // Assuming you're using Toolpad components
import { useTheme } from "@mui/material/styles";
import { TextField, Button, Box, Typography } from "@mui/material";

const registerStudent = async (formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");
      const studentId = formData.get("studentId");
      const course = formData.get("course");

      alert(
        `Registering student with details:\nName: ${firstName} ${lastName}\nEmail: ${email}\nStudent ID: ${studentId}\nCourse: ${course}`
      );
      // preview-start
      resolve({
        type: "StudentRegistration",
        error: "Student registered successfully.",
      });
      // preview-end
    }, 300);
  });
  return promise;
};

export default function StudentRegistration() {
  const theme = useTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await registerStudent(formData);
  };

  return (
    // preview-start
    <AppProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Student Registration
        </Typography>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Student ID"
          name="studentId"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Course"
          name="course"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Register
        </Button>
      </Box>
    </AppProvider>
    // preview-end
  );
}
