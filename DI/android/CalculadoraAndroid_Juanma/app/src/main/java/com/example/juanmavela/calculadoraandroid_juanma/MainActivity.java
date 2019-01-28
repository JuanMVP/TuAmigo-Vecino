package com.example.juanmavela.calculadoraandroid_juanma;


import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;

public class MainActivity  extends AppCompatActivity implements View.OnClickListener{

    Button btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,btnBorrarUno, btnSuma,btnResta,btnIgual;

    ImageButton btnBorrarTodo;
    TextView pantallaCalculadora;
    double result;
    String textoCalculadora;
    Calculadora calculadora;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btn0 = findViewById(R.id.button0);
        btn1 = findViewById(R.id.button1);
        btn2 = findViewById(R.id.button2);
        btn3 = findViewById(R.id.button3);
        btn4 = findViewById(R.id.button4);
        btn5 = findViewById(R.id.button5);
        btn6 = findViewById(R.id.button6);
        btn7 = findViewById(R.id.button7);
        btn8 = findViewById(R.id.button8);
        btn9 = findViewById(R.id.button9);
        btnBorrarTodo = findViewById(R.id.buttonEliminarNumero);
        btnBorrarUno = findViewById(R.id.buttonBorrarUno);
        btnSuma = findViewById(R.id.buttonSuma);
        btnResta = findViewById(R.id.buttonResta);
        btnIgual = findViewById(R.id.buttonIgual);
        pantallaCalculadora = findViewById(R.id.editNumbers);
        calculadora = new Calculadora();

        btn0.setOnClickListener(this);
        btn1.setOnClickListener(this);
        btn2.setOnClickListener(this);
        btn3.setOnClickListener(this);
        btn4.setOnClickListener(this);
        btn5.setOnClickListener(this);
        btn6.setOnClickListener(this);
        btn7.setOnClickListener(this);
        btn8.setOnClickListener(this);
        btn9.setOnClickListener(this);
        btnBorrarTodo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                pantallaCalculadora.setText("");
            }
        });

        btnBorrarUno.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                textoCalculadora = pantallaCalculadora.getText().toString();
                textoCalculadora = textoCalculadora.substring(0,textoCalculadora.length()-1);
                pantallaCalculadora.setText(textoCalculadora);
            }
        });

        btnSuma.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                pantallaCalculadora.setText(calculadora.suma(op1));
            }
        });

    }


    @Override
    public void onClick(View v) {
        Button btnPulsado = (Button)v;
        textoCalculadora = pantallaCalculadora.getText().toString();
        pantallaCalculadora.setText(textoCalculadora + btnPulsado.getText().toString());
    }
}
