package com.example.juanmavela.recycledview2_juanma;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.juanmavela.recycledview2_juanma.model.Repo;

import java.util.List;

public class ListadosRepositoriosAdapter extends RecyclerView.Adapter<ListadosRepositoriosAdapter.ListadoRepositoriosViewHolder> {

    List<Repo> listRepo;
    Context context;

    public ListadosRepositoriosAdapter(List<Repo> dataset, Context context){
        listRepo = dataset;
        this.context = context;
    }

    public static class ListadoRepositoriosViewHolder extends RecyclerView.ViewHolder{

        public TextView text1;
        public TextView text2;
        public ImageView imageView;


        public ListadoRepositoriosViewHolder(@NonNull View itemView){
            super(itemView);

            text1 = itemView.findViewById(R.id.text1);
            text2 = itemView.findViewById(R.id.text2);
            imageView = itemView.findViewById(R.id.imageView);


        }
    }


    @NonNull
    @Override
    public ListadosRepositoriosAdapter.ListadoRepositoriosViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {

        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.list_item,viewGroup,false);
        ListadoRepositoriosViewHolder vh = new ListadoRepositoriosViewHolder(view);

        return vh;
    }

    @Override
    public void onBindViewHolder(@NonNull ListadosRepositoriosAdapter.ListadoRepositoriosViewHolder listadoRepositoriosViewHolder, int i) {
        Repo repo = listRepo.get(i);
    }

    @Override
    public int getItemCount() {
        return listRepo.size();
    }
}
