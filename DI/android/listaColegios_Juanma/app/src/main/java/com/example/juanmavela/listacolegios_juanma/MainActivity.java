package com.example.juanmavela.listacolegios_juanma;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

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
            intent.setData(Uri.parse("geo:"+latitud+longitud));
            if (intent.resolveActivity(getPackageManager()) != null) {
                startActivity(intent);
            }

    }
}
