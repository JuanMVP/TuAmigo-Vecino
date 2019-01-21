package com.example.juanmavela.retrofit_juanma.retrofit.retrofit.services;

import com.example.juanmavela.retrofit_juanma.Repo;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface GitHubService {

    @GET("users/{user}/repos")
    Call<List<Repo>> listRepos(@Path("user") String user);
}
