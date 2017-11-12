package com.ampm.blue.RecruitmentTests.restObjects;

public class QuestionChoice implements Question {
    private String question;

    public String getQuestion(){
        return question;
    }
    public String type(){
        return "CHOICE";
    }
}
