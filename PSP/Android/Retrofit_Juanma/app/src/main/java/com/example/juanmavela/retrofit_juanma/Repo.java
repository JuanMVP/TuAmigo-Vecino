package com.example.juanmavela.retrofit_juanma;

public class Repo {

    private String name;

    public Repo() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}
