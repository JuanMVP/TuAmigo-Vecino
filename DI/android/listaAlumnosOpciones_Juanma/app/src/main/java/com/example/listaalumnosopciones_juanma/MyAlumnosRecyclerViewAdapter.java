package com.example.listaalumnosopciones_juanma;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;

import com.example.listaalumnosopciones_juanma.dummy.DummyContent.DummyItem;
import com.example.listaalumnosopciones_juanma.model.Alumno;
import com.example.listaalumnosopciones_juanma.model.AlumnoInteracionListener;

import java.util.List;


public class MyAlumnosRecyclerViewAdapter extends RecyclerView.Adapter<MyAlumnosRecyclerViewAdapter.ViewHolder> {

    private final List<Alumno> mValues;
    private final AlumnoInteracionListener mListener;
    Context ctx;

    public MyAlumnosRecyclerViewAdapter(Context context, int layout, List<Alumno> items, AlumnoInteracionListener listener) {
        mValues = items;
        mListener = listener;
        this.ctx = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_alumnos, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.nombre.setText(holder.mItem.getNombre());
        holder.apellidos.setText(holder.mItem.getApellidos());
        Glide.with(ctx).load(holder.mItem.getImagenUrl()).into(holder.imagenAlumno);


    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView nombre;
        public final TextView apellidos;
        public Alumno mItem;
        public ImageView imagenAlumno;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombre = view.findViewById(R.id.textNombre);
            apellidos = view.findViewById(R.id.textApellido);
            imagenAlumno = view.findViewById(R.id.imagenAlumno);
        }

        @Override
        public String toString() {
            return "ViewHolder{" +
                    "mView=" + mView +
                    ", nombre=" + nombre +
                    ", apellidos=" + apellidos +
                    ", mItem=" + mItem +
                    ", imagenAlumno=" + imagenAlumno +
                    '}';
        }
    }
}
