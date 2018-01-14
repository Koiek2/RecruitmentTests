package com.ampm.blue.RecruitmentTests.repository;

import com.ampm.blue.RecruitmentTests.restObjects.Credentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<Credentials, Integer> {

    public Credentials findById(int id);



}
