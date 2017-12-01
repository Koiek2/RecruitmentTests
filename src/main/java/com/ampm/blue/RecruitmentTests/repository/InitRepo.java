package com.ampm.blue.RecruitmentTests.repository;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ampm.blue.RecruitmentTests.restObjects.TestQuestion;

@Component
public class InitRepo implements CommandLineRunner{

	
	@Autowired
	TestQuestionRepository repo;
	
	@Override
	public void run(String... arg0) throws Exception {
		Arrays.asList(
				new TestQuestion(1,"Question1","extData1","OPEN"),
				new TestQuestion(2,"Question2","extData2","OPEN"),
				new TestQuestion(3,"Question3","extData3","CLOSE"))
				.forEach(repo::save);
		
	}

}
