package com.example.juanmavela.recycledview2_juanma.retrofit.generator.services.generador;





import com.example.juanmavela.recycledview2_juanma.model.Repo;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface GitHubService {

    @GET("users/{user}/repos")
    Call<List<Repo>> listRepos(@Path("user") String user);


}