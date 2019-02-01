package com.example.listaalumnosopciones_juanma.model;

public class Alumno {

    private String nombre;
    private String apellidos;
    private String imagenUrl;

    public Alumno(){}


    public Alumno(String nombre, String apellidos, String imagenUrl) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.imagenUrl = imagenUrl;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    @Override
    public String toString() {
        return "Alumno{" +
                "nombre='" + nombre + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", imagenUrl='" + imagenUrl + '\'' +
                '}';
    }
}
