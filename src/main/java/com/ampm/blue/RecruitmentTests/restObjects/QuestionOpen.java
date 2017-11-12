package com.ampm.blue.RecruitmentTests.restObjects;

public class QuestionOpen implements Question {
    private String question;

    public String getQuestion(){
        return question;
    }
    public String type(){
        return "OPEN";
    }

}
