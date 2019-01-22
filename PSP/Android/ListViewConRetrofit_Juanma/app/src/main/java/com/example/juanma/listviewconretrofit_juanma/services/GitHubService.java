package com.example.juanma.listviewconretrofit_juanma.services;

import com.example.juanma.listviewconretrofit_juanma.model.Repo;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface GitHubService {

    @GET("users/{user}/repos")
    Call<List<Repo>> listaRepos(@Path("user") String user);
}
