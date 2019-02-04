package com.example.mynotesapp_juanma.model;

public class Nota {
    private String nombreAsignatura;
    private double nota;

    public Nota (){}

    public Nota(String nombreAsignatura, double nota) {
        this.nombreAsignatura = nombreAsignatura;
        this.nota = nota;
    }


    public String getNombreAsignatura() {
        return nombreAsignatura;
    }

    public void setNombreAsignatura(String nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }

    @Override
    public String toString() {
        return "Nota{" +
                "nombreAsignatura='" + nombreAsignatura + '\'' +
                ", nota=" + nota +
                '}';
    }
}
