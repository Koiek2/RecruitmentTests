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

	@Test
	public void shouldReturnAllTheTestQuestionsFromDatabase() {
		System.out.println();
		testQuestionRepository.findAll().forEach(x->System.out.println(x.toString()));
		assertThat(testQuestionRepository.findAll().size()).isEqualTo(3);
	}

	@Test
	public void shouldReturnFromTheDatabaseTestQuestionWithIdEqual1() {

		TestQuestion question = testQuestionRepository.findById(1);

		assertThat(question.getId()).isEqualTo(1);
		assertThat(question.getQuestion()).isEqualTo("Question1");
		assertThat(question.getExtraData()).isEqualTo("extData1");
		assertThat(question.getType()).isEqualTo("OPEN");
	}
}
