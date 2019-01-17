package com.example.juanmavela.ejemploasynctask_juanma;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    TextView numero;
    Button boton;
    EditText cantidad;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        numero = findViewById(R.id.numero);
        boton = findViewById(R.id.button);
        cantidad = findViewById(R.id.editCantidad);

        boton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                int n = Integer.parseInt(cantidad.getText().toString());
                new MiPrimerAsyncTaskHulio().execute(n);



            }
        });


    }


    private class MiPrimerAsyncTaskHulio extends AsyncTask<Integer,Void,List<Integer>>{


        @Override
        protected List<Integer> doInBackground(Integer... integers) {
            int cantidad = integers[0];
            List<Integer> result = new ArrayList<>();
            if(cantidad <1)
                cantidad = 1;
            else if(cantidad > 7)
                cantidad = 7;
            Random r = new Random();

            for (int i=0; i<cantidad; i++)
                result.add(Integer.valueOf(r.nextInt(100)));

            return result;
        }

        @Override
        protected void onPostExecute(List<Integer> result) {

            for(Integer n : result){
                numero.setText(numero.getText().toString() + ", " + n.toString());
            }
                    }


    }

}
