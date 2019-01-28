package com.example.juanmavela.listacolegios_juanma.model;

public class Colegio {
    private String nombre;
    private String direccion;
    private String latitud;
    private String longitud;
    private String etapasEducativas;
    private String imagen_url;

    public Colegio(String nombre, String direccion, String latitud, String longitud, String etapasEducativas, String imagen_url) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.etapasEducativas = etapasEducativas;
        this.imagen_url = imagen_url;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public String getLatitud() {
        return latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public String getEtapasEducativas() {
        return etapasEducativas;
    }

    public String getImagen_url() {
        return imagen_url;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public void setEtapasEducativas(String etapasEducativas) {
        this.etapasEducativas = etapasEducativas;
    }

    public void setImagen_url(String imagen_url) {
        this.imagen_url = imagen_url;
    }

    @Override
    public String toString() {
        return "Colegio{" +
                "nombre='" + nombre + '\'' +
                ", direccion='" + direccion + '\'' +
                ", latitud='" + latitud + '\'' +
                ", longitud='" + longitud + '\'' +
                ", etapasEducativas='" + etapasEducativas + '\'' +
                ", imagen_url='" + imagen_url + '\'' +
                '}';
    }
}
