package com.salesianostriana.jsonrest;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.thedeanda.lorem.Lorem;
import com.thedeanda.lorem.LoremIpsum;

@RestController
public class PostController {
	
	private final AtomicLong id = new AtomicLong();
	private final AtomicLong userId = new AtomicLong();
	Lorem titulo = LoremIpsum.getInstance();
	Lorem cuerpo = LoremIpsum.getInstance();
	
	
	
	
	
	
	
	@GetMapping("/post")
	public Post hilo() {
	return new Post(id.incrementAndGet(),
					userId.incrementAndGet(),
					titulo.getWords(4, 6),
					cuerpo.getParagraphs(1, 3));
	}
	
	
	
	
	@GetMapping("/posts")
	public List <Post> foro () {
		return Arrays.asList(
				
				new Post(1l,1l,titulo.getWords(4, 6),cuerpo.getParagraphs(1, 3)),
				new Post(2l,2l,titulo.getWords(4, 6),cuerpo.getParagraphs(1, 3)),
				new Post(3l,3l,titulo.getWords(4, 6),cuerpo.getParagraphs(1, 3)),
				new Post(4l,4l,titulo.getWords(4, 6),cuerpo.getParagraphs(1, 3))
				);
	}
	
	
	

}
