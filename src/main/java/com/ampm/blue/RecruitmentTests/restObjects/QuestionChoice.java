package com.ampm.blue.RecruitmentTests.restObjects;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class QuestionChoice implements Question {
    private String question;
    private String choiceString;

    public QuestionChoice(String question, String choiceString) {
        this.question = question;
        this.choiceString = choiceString;
    }

    public List<String> getChoicesList(){
        return Arrays.stream(choiceString.split(">")).collect(Collectors.toList());
    }
    public String getQuestion(){
        return question;
    }
    public String type(){
        return "CHOICE";
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getChoiceString() {
        return choiceString;
    }

    public void setChoiceString(String choiceString) {
        this.choiceString = choiceString;
    }
}
