package com.ampm.blue.RecruitmentTests.restObjects;

public class TestMetadata {

    private String testName;
    private int id;

    public TestMetadata() {
    }

    public TestMetadata(String testName, int id) {
        this.testName = testName;
        this.id = id;
    }


    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
