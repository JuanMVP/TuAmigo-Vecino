package com.example.mynotesapp_juanma.model;

public class Nota {
    private String nombreAsignatura;
    private String nota;

    public Nota (){}

    public Nota(String nombreAsignatura, String nota) {
        this.nombreAsignatura = nombreAsignatura;
        this.nota = nota;
    }


    public String getNombreAsignatura() {
        return nombreAsignatura;
    }

    public void setNombreAsignatura(String nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }

    public String getNota() {
        return nota;
    }

    public void setNota(String nota) {
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
