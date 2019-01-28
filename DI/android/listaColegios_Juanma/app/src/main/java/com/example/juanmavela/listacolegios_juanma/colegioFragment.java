package com.example.juanmavela.listacolegios_juanma;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.example.juanmavela.listacolegios_juanma.dummy.DummyContent;
import com.example.juanmavela.listacolegios_juanma.dummy.DummyContent.DummyItem;
import com.example.juanmavela.listacolegios_juanma.model.Colegio;
import com.example.juanmavela.listacolegios_juanma.model.ColegioInteracionListener;

import java.util.ArrayList;
import java.util.List;

/**
 * A fragment representing a list of Items.
 * <p/>
 * Activities containing this fragment MUST implement the {@link OnListFragmentInteractionListener}
 * interface.
 */
public class colegioFragment extends Fragment {

    // TODO: Customize parameter argument names
    private static final String ARG_COLUMN_COUNT = "column-count";
    // TODO: Customize parameters
    private int mColumnCount = 1;
    private ColegioInteracionListener mListener;
    MycolegioRecyclerViewAdapter adapter;
    Context context;
    List<Colegio> listaColegios;


    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public colegioFragment() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static colegioFragment newInstance(int columnCount) {
        colegioFragment fragment = new colegioFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mColumnCount = getArguments().getInt(ARG_COLUMN_COUNT);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_colegio_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }

            listaColegios = new ArrayList<>();
            listaColegios.add(new Colegio("Salesianos San Pedro","Condes de Bustillo,17 Sevilla","37.380368","-6.007181","Infantil,Primaria,Secundaria,Bachillerato y FP","http://www.artesacro.org/imagenes/La%20carcel.JPG"));
            listaColegios.add(new Colegio("Salesianos San Pedro","Condes de Bustillo,17 Sevilla","37.380368","-6.007181","Infantil,Primaria,Secundaria,Bachillerato y FP","http://www.artesacro.org/imagenes/La%20carcel.JPG"));

            adapter = new MycolegioRecyclerViewAdapter(context,R.layout.fragment_colegio,listaColegios,mListener);
            recyclerView.setAdapter(adapter);

        }
        return view;
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof ColegioInteracionListener) {
            mListener = (ColegioInteracionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement ColegioInteracionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p/>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnListFragmentInteractionListener {
        // TODO: Update argument type and name
        void onListFragmentInteraction(DummyItem item);
    }
}
