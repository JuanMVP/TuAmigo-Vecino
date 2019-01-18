package com.example.juanmavela.a08_fragmentcontainer_juanma;

import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button btnCambio;
    boolean cargarAzul = true;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnCambio = findViewById(R.id.buttonCambioFragment);
        //Por defecto cargo el FrameLayout
        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.contenedor, new RedFragment())
                .commit();

        //Evento click del boton
        btnCambio.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Fragment f = null;
                if(cargarAzul){
                    f = new BlueFragment();
                    btnCambio.setText(getString(R.id));
                }else{
                    f = new RedFragment();
                }
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.contenedor, f)
                        .commit();

                cargarAzul = !cargarAzul;
            }
        });
    }
}
