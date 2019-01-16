package com.salesianostriana.jsonrest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor  @Builder
public class Post {
	
	private  long id;
	private  long userId;
	private  String title;
	private  String body;
	
	public Post(long id, long userId, String title, String body) {
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.body = body;
	}
	
	
	
	
	
}
