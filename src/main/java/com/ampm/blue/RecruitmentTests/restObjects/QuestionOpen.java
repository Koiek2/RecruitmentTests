package com.ampm.blue.RecruitmentTests.restObjects;

public class QuestionOpen implements Question {
    private String question;

    public QuestionOpen(String question) {
        this.question = question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuestion(){
        return question;
    }
    public String type(){
        return "OPEN";
    }

}
