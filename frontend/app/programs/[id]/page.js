"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";

export default function ProgramDetails({ params }) {
  const { id } = params;
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async () => {
      const res = await fetch(
        `http://localhost:1338/api/programs/${id}?populate=*`
      );
      const data = await res.json();
      setProgram(data.data);
    };
    fetchProgram();
  }, [id]);

  if (!program) return <p>Loading...</p>;

  return (
    <Container>
      <Paper style={{ padding: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h4" gutterBottom>
          {program.attributes.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {program.attributes.description}
        </Typography>
        <Typography variant="h6">Modules:</Typography>
        <ul>
          {program.attributes.modules.data.map((module) => (
            <li key={module.id}>{module.attributes.title}</li>
          ))}
        </ul>
      </Paper>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
    </Container>
  );
}
