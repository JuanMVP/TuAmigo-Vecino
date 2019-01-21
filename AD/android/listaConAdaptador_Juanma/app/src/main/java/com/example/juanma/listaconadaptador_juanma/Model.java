package com.example.juanma.listaconadaptador_juanma;

public class Model {
    private String nombre;
    private String descripcion;
    private int codigo;

    public Model(String nombre, String descripcion, int codigo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
}
