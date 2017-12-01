package com.ampm.blue.RecruitmentTests.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ampm.blue.RecruitmentTests.restObjects.RecruitmentTest;

@Repository
public interface RecruitmentTestRepository extends JpaRepository<RecruitmentTest, Integer> {

	public RecruitmentTest findById(int id);

}
