package com.app.registeration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registeration.model.User;
import com.app.registeration.repository.RegisterationRepository;

@Service
public class RegisterationService {
	@Autowired
	private RegisterationRepository repo;
	public User saveUser(User user) {
		
		return repo.save(user);
		
	}
	public User fetchUserByEmailId(String  email) {
		return repo.findByEmailId(email);
	}

}
