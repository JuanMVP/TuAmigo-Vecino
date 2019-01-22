package com.example.juanma.listviewconretrofit_juanma;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.example.juanma.listviewconretrofit_juanma.model.Repo;
import com.example.juanma.listviewconretrofit_juanma.services.GitHubService;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    ListView listView;
    List<Repo> data;
    GitHubService service;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);

        MyAdapter adapter = new MyAdapter(this,data);

        listView.setAdapter(adapter);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("https://api.github.com")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        service = retrofit.create(GitHubService.class);

        new LoadDataTask().execute("juanMVP");


    }

    public void loadData(List<Repo> data){
        listView.setAdapter(
                new ArrayAdapter<Repo>(this,R.layout.list_item,data)
        );
    }

    private class LoadDataTask extends AsyncTask<String, Void, List<Repo>> {

        @Override
        protected List<Repo> doInBackground(String... strings) {

            List<Repo> result = null;


            Call<List<Repo>> callRepos = service.listaRepos(strings[0]);

            Response<List<Repo>> responseRepos = null;

            try {
                responseRepos = callRepos.execute();
            } catch (IOException e) {
                e.printStackTrace();
            }

            if (responseRepos.isSuccessful()) {
                result = responseRepos.body();
            }
            return result;
        }

        @Override
        protected void onPostExecute(List<Repo> repos) {
            if (repos != null) {
                loadData(repos);
            }
        }


    }
}
