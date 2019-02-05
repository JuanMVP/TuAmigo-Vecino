package com.example.mynotesapp_juanma;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.mynotesapp_juanma.model.ListaNotasInteracionListener;
import com.example.mynotesapp_juanma.model.Nota;

import java.util.List;


public class MyNotasListRecyclerViewAdapter extends RecyclerView.Adapter<MyNotasListRecyclerViewAdapter.ViewHolder> {

    private final List<Nota> mValues;
    private final ListaNotasInteracionListener mListener;
    Context ctx;

    public MyNotasListRecyclerViewAdapter(Context context, int layout, List<Nota> items, ListaNotasInteracionListener listener) {
        mValues = items;
        mListener = listener;
        this.ctx = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_notaslist, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.nombreAsignatura.setText(holder.mItem.getNombreAsignatura());
        holder.nota.setText(holder.mItem.getNota());


    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView nombreAsignatura;
        public final TextView nota;
        public Nota mItem;


        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombreAsignatura = view.findViewById(R.id.nombreAsignaturaFavorita);
            nota = view.findViewById(R.id.notaAlumnoFavorita);
        }

        @Override
        public String toString() {
            return "ViewHolder{" +
                    "mView=" + mView +
                    ", nombreAsignatura=" + nombreAsignatura +
                    ", nota=" + nota +
                    '}';
        }
    }
}
