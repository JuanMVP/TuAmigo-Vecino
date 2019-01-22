package com.example.juanmavela.listviewclase_juanma;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.juanmavela.listviewclase_juanma.model.Repo;

import java.util.List;

public class MyAdapter extends ArrayAdapter<Repo> {

    public MyAdapter(Context context, List<Repo> data){
        super(context, R.layout.list_item,data);
    }


    @Override
    public View getView(int position,  View convertView, ViewGroup parent) {

        View item = LayoutInflater.from(getContext()).inflate(R.layout.list_item,null);

        ImageView img = item.findViewById(R.id.imageView);
        TextView text1 = item.findViewById(R.id.text1);
        TextView text2 = item.findViewById(R.id.text2);

        Repo repo = getItem(position);

        text1.setText(repo.getName());
        text2.setText(repo.getFull_name());

        Glide
                .with(getContext())
                .load(repo.getOwner().getAvatar_url())
                .into(img);

        return item;


    }
}
