package com.example.juanmavela.listacolegios_juanma;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.juanmavela.listacolegios_juanma.colegioFragment.OnListFragmentInteractionListener;
import com.example.juanmavela.listacolegios_juanma.dummy.DummyContent.DummyItem;
import com.example.juanmavela.listacolegios_juanma.model.Colegio;
import com.example.juanmavela.listacolegios_juanma.model.ColegioInteracionListener;

import java.util.List;


public class MycolegioRecyclerViewAdapter extends RecyclerView.Adapter<MycolegioRecyclerViewAdapter.ViewHolder> {

    private final List<Colegio> mValues;
    private final ColegioInteracionListener mListener;

    public MycolegioRecyclerViewAdapter(Context context, int layout, List<Colegio> listaColegios, ColegioInteracionListener listener) {
        mValues = listaColegios;
        mListener = listener;
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
        holder.direccion.setText(holder.mItem.getLatitud());
        holder.etapas.setText(holder.mItem.getEtapasEducativas());

        holder.direccion.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (null != mListener) {
                    // Notify the active callbacks interface (the activity, if the
                    // fragment is attached to one) that an item has been selected.
                    mListener.onColegioMapClick(holder.mItem.getLatitud(),holder.mItem.getLongitud());
                }
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

        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombre =  view.findViewById(R.id.nombreColegio);
            direccion =  view.findViewById(R.id.textDireccion);
            etapas = view.findViewById(R.id.textEtapas);
        }

        @Override
        public String toString() {
            return super.toString() + " '" + direccion.getText() + "'";
        }
    }
}
