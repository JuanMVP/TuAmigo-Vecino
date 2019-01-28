package com.example.juanmavela.listacolegios_juanma;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageButton;

import com.example.juanmavela.listacolegios_juanma.model.ColegioInteracionListener;

public class MainActivity extends AppCompatActivity implements ColegioInteracionListener {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);



    }

    @Override
    public void onColegioMapClick(String latitud, String longitud) {

            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse("geo:37.380368,-6.007181"));
            if (intent.resolveActivity(getPackageManager()) != null) {
                startActivity(intent);
            }

    }
}
