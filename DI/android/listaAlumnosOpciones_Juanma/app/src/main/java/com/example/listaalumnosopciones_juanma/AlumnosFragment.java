package com.example.listaalumnosopciones_juanma;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.listaalumnosopciones_juanma.dummy.DummyContent;
import com.example.listaalumnosopciones_juanma.dummy.DummyContent.DummyItem;
import com.example.listaalumnosopciones_juanma.model.Alumno;
import com.example.listaalumnosopciones_juanma.model.AlumnoInteracionListener;

import java.util.ArrayList;
import java.util.List;


public class AlumnosFragment extends Fragment {

    // TODO: Customize parameter argument names
    private static final String ARG_COLUMN_COUNT = "column-count";
    // TODO: Customize parameters
    private int mColumnCount = 1;
    private AlumnoInteracionListener mListener;
    MyAlumnosRecyclerViewAdapter adapter;
    Context ctx;
    List<Alumno> listaAlumnos;

    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public AlumnosFragment() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static AlumnosFragment newInstance(int columnCount) {
        AlumnosFragment fragment = new AlumnosFragment();
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
        View view = inflater.inflate(R.layout.fragment_alumnos_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }
            listaAlumnos = new ArrayList<>();
            listaAlumnos.add(new Alumno("Juan Manuel","Vela Pérez","https://api.adorable.io/avatars/285/juan@adorable.io.png"));
            listaAlumnos.add(new Alumno("Javier", "Mateos Cano","https://api.adorable.io/avatars/285/javier@adorable.io.png"));
            listaAlumnos.add(new Alumno("Mario","Martinez Sanz","https://api.adorable.io/avatars/285/mario@adorable.io.png"));
            listaAlumnos.add(new Alumno("Juan Manuel","Vela Pérez","https://api.adorable.io/avatars/285/juan@adorable.io.png"));
            listaAlumnos.add(new Alumno("Javier", "Mateos Cano","https://api.adorable.io/avatars/285/javier@adorable.io.png"));
            listaAlumnos.add(new Alumno("Mario","Martinez Sanz","https://api.adorable.io/avatars/285/mario@adorable.io.png"));

            adapter = new MyAlumnosRecyclerViewAdapter(context,R.layout.fragment_alumnos,listaAlumnos,mListener);

            recyclerView.setAdapter(adapter);
        }




        return view;
    }


    @Override
    public void onAttach(Context context) {
        ctx = context;
        super.onAttach(context);
        if (context instanceof AlumnoInteracionListener) {
            mListener = (AlumnoInteracionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnListFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }


}
