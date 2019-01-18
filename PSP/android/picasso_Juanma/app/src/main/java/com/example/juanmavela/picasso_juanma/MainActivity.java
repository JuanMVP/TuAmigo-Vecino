package com.example.juanmavela.picasso_juanma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

public class MainActivity extends AppCompatActivity {

    ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imageView = findViewById(R.id.imageView);

        Picasso
                .get()
                .load("https://thumb.besoccerapps.com/rbetis/img_news/old_img_news_betis/LOGO_betis1.jpg?size=1050x590t")
                .into(imageView);
    }
}
