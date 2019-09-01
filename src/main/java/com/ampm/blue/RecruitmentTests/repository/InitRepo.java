package com.ampm.blue.RecruitmentTests.repository;

import java.util.Arrays;

import com.ampm.blue.RecruitmentTests.restObjects.Credentials;
import com.ampm.blue.RecruitmentTests.restObjects.EditorCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ampm.blue.RecruitmentTests.restObjects.TestQuestion;

@Component
public class InitRepo implements CommandLineRunner {

	@Autowired
	TestQuestionRepository repo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	EditorsRepository editorsRepo;
	@Autowired
	RecruitmentTestRepository recruitmentTestRepo;

	@Override
	public void run(String... arg0) throws Exception {

		Arrays.asList(new TestQuestion(1, "Question1", "extData1", "OPEN"),
				new TestQuestion(2, "Question2", "extData2", "OPEN"),
				new TestQuestion(3, "Question3", "extData3", "CLOSE")).forEach(repo::save);



		Arrays.asList(new Credentials(1,"user1","password1"),
				new Credentials(2,"user2","password2"),
				new Credentials(3,"damian","damian")).forEach(userRepo::save);


		Arrays.asList(new EditorCredentials(1,"admin1","admin"),
				new EditorCredentials(2,"kuba","kuba123"),
				new EditorCredentials(3,"maurycy","haslo1")).forEach(editorsRepo::save);

		userRepo.findAll().forEach(x-> System.out.println(x.toString()));
		editorsRepo.findAll().forEach(x-> System.out.println(x.toString()));
		repo.findAll().forEach(x-> System.out.println(x.toString()));

	}



}
