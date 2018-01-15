package com.ampm.blue.RecruitmentTests.repository;

import com.ampm.blue.RecruitmentTests.restObjects.Credentials;
import com.ampm.blue.RecruitmentTests.restObjects.EditorCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EditorsRepository extends JpaRepository<EditorCredentials, Integer> {

    public Credentials findById(int id);



}
