package com.example.juanmavela.listacolegios_juanma;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.juanmavela.listacolegios_juanma.model.Colegio;
import com.example.juanmavela.listacolegios_juanma.model.ColegioInteracionListener;

import java.util.List;


public class MycolegioRecyclerViewAdapter extends RecyclerView.Adapter<MycolegioRecyclerViewAdapter.ViewHolder> {

    private final List<Colegio> mValues;
    private final ColegioInteracionListener mListener;
    Context ctx;

    public MycolegioRecyclerViewAdapter(Context context, int layout, List<Colegio> listaColegios, ColegioInteracionListener listener) {
        mValues = listaColegios;
        mListener = listener;
        this.ctx = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_colegio, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.nombre.setText(holder.mItem.getNombre());
        holder.direccion.setText(holder.mItem.getDireccion());
        holder.etapas.setText(holder.mItem.getEtapasEducativas());
        Glide.with(ctx).load(holder.mItem.getImagen_url()).into(holder.imagenColegio);


        holder.btnMapa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                    mListener.onColegioMapClick(holder.mItem.getLatitud(), holder.mItem.getLongitud());

            }
        });
    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView nombre;
        public final TextView direccion;

        public final TextView etapas;
        public Colegio mItem;
        public ImageView imagenColegio;
        public ImageButton btnMapa;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombre = view.findViewById(R.id.nombreColegio);
            direccion = view.findViewById(R.id.textDireccion);

            etapas = view.findViewById(R.id.textEtapas);
            imagenColegio = view.findViewById(R.id.imagenColegio);
            btnMapa = view.findViewById(R.id.buttonMapa);
        }

        @Override
        public String toString() {
            return "ViewHolder{" +
                    "mView=" + mView +
                    ", nombre=" + nombre +
                    ", direccion=" + direccion +
                    ", etapas=" + etapas +
                    ", mItem=" + mItem +
                    ", imagenColegio=" + imagenColegio +
                    ", btnMapa=" + btnMapa +
                    '}';
        }
    }
}
