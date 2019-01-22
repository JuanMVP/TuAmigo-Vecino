package com.example.juanmavela.listviewclase_juanma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import com.example.juanmavela.listviewclase_juanma.model.Owner;
import com.example.juanmavela.listviewclase_juanma.model.Repo;

import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);

        MyAdapter adapter = new MyAdapter(this, Arrays.asList(new Repo(155525054,"2DAM","JuanMVP/2DAM",new Owner("https://avatars0.githubusercontent.com/u/38249988?v=4"))));

        listView.setAdapter(adapter);

    }
}
