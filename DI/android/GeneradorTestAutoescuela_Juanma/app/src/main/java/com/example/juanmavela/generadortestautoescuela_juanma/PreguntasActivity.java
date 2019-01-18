package com.example.juanmavela.generadortestautoescuela_juanma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import java.util.List;

public class PreguntasActivity extends AppCompatActivity implements View.OnClickListener {

    int numeroPreguntas, preguntasRealizadas = 0, correctas = 0, idRespuestaCorrecta;
    Button btnSiguiente;
    RadioGroup radioGroupRespuestas;
    RadioButton radioButton1, radioButton2, radioButton3;
    List<String> listaPreguntas;
    TextView textViewTitulo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_preguntas);

        btnSiguiente = findViewById(R.id.buttonSiguiente);
        radioGroupRespuestas = findViewById(R.id.radioGroupRespuestas);
        radioButton1= findViewById(R.id.radioButton);
        radioButton2= findViewById(R.id.radioButton2);
        radioButton3= findViewById(R.id.radioButton3);
        textViewTitulo = findViewById(R.id.textViewPreguntas);

        Bundle extras = getIntent().getExtras();
        numeroPreguntas = extras.getInt(Constants.EXTRA_NUMPREGUNTAS);

        btnSiguiente.setOnClickListener(this);
        generarSiguientePregunta();



    }

    @Override
    public void onClick(View v) {

        if(preguntasRealizadas == numeroPreguntas){
            //caso en el que se pulsa finalizar
            Toast.makeText(this, "Has acertado"+correctas+"preguntas", Toast.LENGTH_SHORT).show();
        }
        int rbId = radioGroupRespuestas.getCheckedRadioButtonId();

        if(rbId == idRespuestaCorrecta){
            correctas++;

        }

        preguntasRealizadas++;

        if(preguntasRealizadas == numeroPreguntas){
            btnSiguiente.setText("Finalizar");
        }

        generarSiguientePregunta();
    }

    private void generarSiguientePregunta() {
        Pregunta pregunta = listaPreguntas.get(preguntasRealizadas);
    }
}
