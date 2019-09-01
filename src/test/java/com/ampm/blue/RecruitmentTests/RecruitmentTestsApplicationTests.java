package com.ampm.blue.RecruitmentTests;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.ampm.blue.RecruitmentTests.repository.TestQuestionRepository;
import com.ampm.blue.RecruitmentTests.restObjects.TestQuestion;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RecruitmentTestsApplicationTests {

	@Autowired
	TestQuestionRepository testQuestionRepository;

	@Test
	public void contextLoads() {
	}

}
