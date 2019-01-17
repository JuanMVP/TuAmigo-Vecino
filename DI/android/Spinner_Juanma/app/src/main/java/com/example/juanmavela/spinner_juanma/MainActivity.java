package com.example.juanmavela.spinner_juanma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.Spinner;

public class MainActivity extends AppCompatActivity {

    Spinner spinerStarWars;
    ImageView ivStarWars;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        spinerStarWars = findViewById(R.id.spinnerPersonajes);
        ivStarWars = findViewById(R.id.imageViewStarWars);

        // Create an ArrayAdapter using the string array and a default spinner layout
        // Usamos un adaptador para cargar en el Spinner los elementos
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.starwars_objects, android.R.layout.simple_spinner_item);
    }
}
