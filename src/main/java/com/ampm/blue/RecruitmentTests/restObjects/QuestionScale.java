package com.ampm.blue.RecruitmentTests.restObjects;

public class QuestionScale implements Question {
    private String question;
    private String scaleData;


    public void setQuestion(String question) {
        this.question = question;
    }

    public QuestionScale(String question, String scaleData) {
        this.question = question;
        this.scaleData = scaleData;
    }

    public String getScaleData() {
        return scaleData;
    }

    public void setScaleData(String scaleData) {
        this.scaleData = scaleData;
    }

    public String getQuestion(){
        return question;
    }
    public String type(){
        return "SCALE";
    }
}
