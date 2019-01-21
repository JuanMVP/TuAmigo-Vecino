package com.example.juanma.listaconadaptador_juanma;

import android.content.Context;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;

public class Adapter extends BaseAdapter {


    private Context contexto;
    private ArrayList<Model> lista;

    public Adapter(Context contexto, ArrayList<Model> lista){
        this.contexto = contexto;
        this.lista = lista;
    }

    @Override
    public int getCount() {
        return lista.size();
    }

    @Override
    public Object getItem(int position) {
        return lista.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if(convertView == null){
            LayoutInflater layoutInflater = (LayoutInflater)  contexto.getSystemService(contexto.LAYOUT_INFLATER_SERVICE);
            convertView = layoutInflater.inflate(R.layout.item,null);
        }

        TextView nombre = convertView.findViewById(R.id.nombre);
        TextView descripcion = convertView.findViewById(R.id.descripcion);

        nombre.setText(lista.get(position).getNombre());
        descripcion.setText(lista.get(position).getDescripcion());

        return convertView;
    }
}
