package com.app.registeration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.registeration.model.User;

public interface RegisterationRepository extends JpaRepository <User,Integer>{
	
	public User findByEmailId(String emailId);
	public User findByEmailIdandpassword(String emailId,String password);

}
  