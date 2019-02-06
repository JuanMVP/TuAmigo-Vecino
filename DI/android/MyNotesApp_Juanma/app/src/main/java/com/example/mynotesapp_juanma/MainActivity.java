package com.example.mynotesapp_juanma;

import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.widget.TextView;

import com.example.mynotesapp_juanma.dummy.DummyContent;
import com.example.mynotesapp_juanma.model.ListaNotasInteracionListener;

public class MainActivity extends AppCompatActivity implements NotasListFragment.OnListFragmentInteractionListener, NotasFavoritasListFragment.OnListFragmentInteractionListener, ListaNotasInteracionListener, PerfilLogueado.OnFragmentInteractionListener {

    private TextView mTextMessage;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {

            Fragment fragment = null;

            switch (item.getItemId()) {
                case R.id.navigation_home:
                   fragment = new NotasListFragment();
                   break;
                case R.id.navigation_dashboard:

                    fragment = new NotasFavoritasListFragment();
                    break;
                case R.id.navigation_notifications:
                    fragment = new PerfilLogueado();
                    break;
            }


            if(fragment != null){
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.seccion,fragment)
                        .commit();
                return true;
            }

            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTextMessage = (TextView) findViewById(R.id.message);
        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.seccion, new NotasListFragment())
                .commit();


    }

    @Override
    public void onListFragmentInteraction(DummyContent.DummyItem item) {

    }

    @Override
    public void onFragmentInteraction(Uri uri) {

    }
}
