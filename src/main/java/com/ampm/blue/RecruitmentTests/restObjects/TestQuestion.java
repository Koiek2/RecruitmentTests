package com.ampm.blue.RecruitmentTests.restObjects;

public class TestQuestion {

    private String question;
    private String extraData;
    private String type;

    public TestQuestion(String question, String extraData, String type) {
        this.question = question;
        this.extraData = extraData;
        this.type = type;
    }

    public TestQuestion() {
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getExtraData() {
        return extraData;
    }

    public void setExtraData(String data) {
        this.extraData = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "TestQuestion{" +
                "question='" + question + '\'' +
                ", extraData='" + extraData + '\'' +
                ", type='" + type + '\'' +
                '}';
    }

}
