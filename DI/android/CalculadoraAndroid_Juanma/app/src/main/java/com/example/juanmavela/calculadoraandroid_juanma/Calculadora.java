package com.example.juanmavela.calculadoraandroid_juanma;

public class Calculadora {


    public String  suma(String op1, String op2){
        int result = Integer.valueOf(op1)+Integer.valueOf(op2);
        return  String.valueOf(result);
    }

    public String  resta(String op1, String op2){
        int result = Integer.valueOf(op1)-Integer.valueOf(op2);
        return  String.valueOf(result);
    }

}
