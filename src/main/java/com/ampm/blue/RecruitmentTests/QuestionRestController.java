package com.ampm.blue.RecruitmentTests;

import com.ampm.blue.RecruitmentTests.restObjects.Question;

import com.ampm.blue.RecruitmentTests.restObjects.RecruitmentTest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

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

        System.out.println(test.getTestName());
        System.out.println(test.getQuestions().size());
    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/asdasd")
    public void test() throws Exception {
        String testJson = "{\"id\":123,\"testName\":\"\\\"test123\\\"\",\"questions\":[{\"question\":\"asd\",\"extraData\":\"\",\"type\":\"OPEN\"},{\"question\":\"asd\",\"extraData\":\">123\\n>1255\\n>*77\",\"type\":\"CHOICE\"},{\"question\":\"asdfa\",\"extraData\":\"1 || 2\",\"type\":\"SCALE\"},{\"question\":\"asd11\",\"extraData\":\"\",\"type\":\"OPEN\"}]}";
        RecruitmentTest recruitmentTest = objectMapper.readValue(testJson, RecruitmentTest.class);
        System.out.println(recruitmentTest);

    }

    @ResponseBody
    @RequestMapping(method = POST, value = "/removeTest")
    public void removeTest(@RequestBody Question marker, @RequestParam("token") String token) {


    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/getTest")
    public RecruitmentTest getTest(@RequestParam(value = "testId", defaultValue = "0") int id) {

        return null;


    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/getTestByName")
    public RecruitmentTest getTestByName(@RequestParam("testName") String testName) {

        return null;


    }

}
