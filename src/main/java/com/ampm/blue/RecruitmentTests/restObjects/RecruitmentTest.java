package com.ampm.blue.RecruitmentTests.restObjects;

import javax.validation.constraints.NotNull;
import java.util.List;

public class RecruitmentTest {
    private int id;
    private String testName;
    @NotNull
    private List<TestQuestion> questions;

    public RecruitmentTest(int id, String testName, List<TestQuestion> questions) {
        this.id = id;
        this.testName = testName;
        this.questions = questions;
    }

    public RecruitmentTest() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public void setTestQuestions(List<TestQuestion> questions) {
        this.questions = questions;
    }

    @Override
    public String toString() {
        return "RecruitmentTest{" +
                "id=" + id +
                ", testName='" + testName + '\'' +
                ", questions=" + questions +
                '}';
    }

    public List<TestQuestion> getQuestions() {
        return questions;
    }
}
