package com.example.juanmavela.navegadorwebandroid_juanma;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText editUrl;
    Button botonBuscar;
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Rescatar componentes UI

        editUrl = findViewById(R.id.editUrl);
        botonBuscar = findViewById(R.id.buttonBuscar);
        webView = findViewById(R.id.webView);

        botonBuscar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (editUrl.getText().toString().isEmpty()){
                    Toast.makeText(MainActivity.this, "Escriba Primero una URL", Toast.LENGTH_SHORT).show();
                }else{
                    // Aquí deberiamos comprobar si la URL es una URL de internet http://

                    new LoadWebTask().execute(editUrl.getText().toString());

                }
            }
        });

    }


    private class LoadWebTask extends AsyncTask<String, Void, String>{

        @Override
        protected String doInBackground(String... strings) {
            return Downloader.downloadURL(strings[0]);
        }

        @Override
        protected void onPostExecute(String s) {
            Log.d("Contenido URL", s);
            webView.loadData(s,"text/html", "UTF-8");
        }
    }


}
