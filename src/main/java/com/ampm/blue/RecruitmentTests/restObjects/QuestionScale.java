package com.ampm.blue.RecruitmentTests.restObjects;

public class QuestionScale implements Question {
    private String question;



    public String getQuestion(){
        return question;
    }
    public String type(){
        return "SCALE";
    }
}
