package com.ampm.blue.RecruitmentTests;


import com.ampm.blue.RecruitmentTests.restObjects.RecruitmentTest;
import com.ampm.blue.RecruitmentTests.restObjects.TestMetadata;
import com.ampm.blue.RecruitmentTests.restObjects.TestQuestion;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@Component
@RestController
public class QuestionRestController {

    @Autowired
    ObjectMapper objectMapper;

    @ResponseBody
    @RequestMapping(method = POST, value = "/addTest", consumes = APPLICATION_JSON_VALUE)
    public void addTest(@RequestBody RecruitmentTest test) {
        if (test.getId() == -1) {

            //add new test with automatic id
        } else {
            //replace test with given id
        }
        System.out.println(test.getTestName());
        System.out.println(test.getQuestions().size());
    }


    @ResponseBody
    @RequestMapping(method = POST, value = "/removeTest")
    public void removeTest(@RequestBody RecruitmentTest test, @RequestParam("token") String token) {


    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/getTest")
    public RecruitmentTest getTest(@RequestParam(value = "testId") int id) {

        return null;


    }
    @ResponseBody
    @RequestMapping(method = GET, value = "/getTestsNames")
    public TestMetadata[] getTestsNames(@RequestParam("editorId") int editorId) {

        //return all tests names with ids

        TestMetadata testMetadata = new TestMetadata("Animals Template", 5);
        TestMetadata testMetadata2 = new TestMetadata("Not existing template", 6);

        return new TestMetadata[]{testMetadata,testMetadata2};
//        return null;


    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/getTemplate")
    public TestQuestion[] getTemplate(@RequestParam(value = "id") int id) {


        //get temp
        List<TestQuestion> questionList = new ArrayList<>();
        questionList.add(new TestQuestion(1,"do you like puppies?","","OPEN"));
        questionList.add(new TestQuestion(2,"do you like cats?","","OPEN"));
        questionList.add(new TestQuestion(3,"do you like zebras?","","OPEN"));
        RecruitmentTest test = new RecruitmentTest(5,"sometest2",questionList);

        return test.getQuestions().toArray(new TestQuestion[0]);



    }


        //request.open('GET', '/getTemplate?id='+id, true);

    @ResponseBody
    @RequestMapping(method = GET, value = "/getTemplatesNames")
    public TestMetadata[] getTemplatesNames() {

        //return all templates names with ids

        TestMetadata testMetadata = new TestMetadata("Animals Template", 5);
        TestMetadata testMetadata2 = new TestMetadata("Not existing template", 6);

        return new TestMetadata[]{testMetadata,testMetadata2};


    }
    //    request.open('GET', '/getTemplatesNames', true);


}
