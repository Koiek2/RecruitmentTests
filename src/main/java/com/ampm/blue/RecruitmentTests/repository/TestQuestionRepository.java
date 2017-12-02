package com.ampm.blue.RecruitmentTests.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ampm.blue.RecruitmentTests.restObjects.TestQuestion;

@Repository
public interface TestQuestionRepository extends JpaRepository<TestQuestion, Integer> {

	public TestQuestion findById(int id);

}
