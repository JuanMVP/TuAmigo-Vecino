package com.example.juanma.listaconadaptador_juanma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private ListView lista;
    private Adapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ArrayList<Model> listaModelos = new ArrayList<>();

        Model modelo1 = new Model("Juanma", "Hola que tal", 7);
        Model modelo2 = new Model("Joseca", "Masajito gratis miniño",4);

        adapter = new Adapter(this,listaModelos);


        lista = findViewById(R.id.lista);
        lista.setAdapter(adapter);

        lista.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                try{
                    Model modelo = (Model) adapter.getItem(position);
                    Log.e("Juanma", modelo.getCodigo()+"-"+modelo.getNombre());
                    Toast.makeText(getBaseContext(), "Codigo: "+modelo.getCodigo(), Toast.LENGTH_LONG).show();

                }catch (Exception e){
                    e.printStackTrace();
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

    }
}
