package com.example.bottomnavigationmenu_juanma;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView mTextMessage;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            Fragment f = null;
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    f = new HomeFragment();
                    mTextMessage.setText(R.string.title_home);
                    return true;
                case R.id.navigation_dashboard:
                    f = new DashboardFragment();
                    mTextMessage.setText(R.string.title_dashboard);
                    return true;
                case R.id.navigation_notifications:
                    f = new NotificationFragment();
                    mTextMessage.setText(R.string.title_notifications);
                    return true;
            }

            if(f != null) {
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.contenedor, f)
                        .commit();
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

    //Definimo el fragmento a cargar por defecto.
        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.contenedor, new HomeFragment())
                .commit();

    }

}
