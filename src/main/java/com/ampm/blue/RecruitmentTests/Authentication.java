package com.ampm.blue.RecruitmentTests;

import com.ampm.blue.RecruitmentTests.repository.EditorsRepository;
import com.ampm.blue.RecruitmentTests.repository.UserRepository;
import com.ampm.blue.RecruitmentTests.restObjects.Credentials;
import com.ampm.blue.RecruitmentTests.restObjects.EditorCredentials;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@SuppressWarnings("Duplicates")
@RequestMapping("/authentication")
@RestController
@Component
public class Authentication {

    private static final String[] SECRET_KEYS = {"fajnykluczdotokena","kluczDlaEditora"};

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EditorsRepository editorsRepository;


    @ResponseBody
    @RequestMapping(method = POST, value = "/validateuser", consumes = APPLICATION_JSON_VALUE)
    public String authenticateUserAndIssueToken(@RequestBody Credentials credentials) {
        System.out.println("inside validating user");
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        List<Credentials> allUsers = userRepository.findAll();
        allUsers.forEach(x-> System.out.println(x.toString()));
        try {
            Long id = authenticate(allUsers, username, password);
            String token = issueToken(username, id,0);
            return token;


        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
            return null;
        }
    }
 @ResponseBody
    @RequestMapping(method = POST, value = "/validateEditor", consumes = APPLICATION_JSON_VALUE)
    public String authenticateEditorAndIssueToken(@RequestBody Credentials credentials) {
        System.out.println("inside validating editor");
        String username = credentials.getUsername();
        String password = credentials.getPassword();
        List<EditorCredentials> allEditors = editorsRepository.findAll();
        List<Credentials> credentialsList = allEditors.stream().map(x->new Credentials(x.getId(),x.getUsername(),x.getPassword())).collect(Collectors.toList());
//     allEditors.forEach(x-> System.out.println(x.toString()));

     try {
            Long id = authenticate(credentialsList, username, password);
            String token = issueToken(username, id,1);
            return token;


        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
            return null;
        }
    }

    private Long authenticate(List<Credentials> allUsers, String username, String password) throws Exception {


        Long authenticated = -1L;

        for (int i = 0; i < allUsers.size(); i++) {

            Credentials x = allUsers.get(i);
            if (x.getUsername().equals(username) && x.getPassword().equals(password)) {
                authenticated = (long)i;

            }
            if (authenticated < 0) {
                throw new Exception("invalid password for this username");
            }

        }
        return authenticated;

    }



    String issueToken(String username, Long userID, int userType) {



        String compactJws = Jwts.builder()
                .setSubject(userID.toString())
                .claim("username", username)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEYS[userType].getBytes())
                .compact();
        return compactJws;

    }

    @ResponseBody
    @RequestMapping(method = GET, value = "/adduser")
    public void addUser(@RequestParam("username") String username,
                        @RequestParam("password") String password) {
        System.out.println("inside /adduser now");

        int id = userRepository.findAll().stream().mapToInt(x -> x.getId()).boxed().max(Integer::compareTo).get();
        userRepository.save(new Credentials(id, username, password));

    }


    @ResponseBody
    @RequestMapping(method = GET, value = "/validateTokenUser")
    public boolean validateTokenUserRest(String token) throws SignatureException, MalformedJwtException {


        try {
            validateToken(token,0);
            return true;
        } catch (SignatureException | MalformedJwtException | IllegalArgumentException e) {
            return false;
        }

    }
    @ResponseBody
    @RequestMapping(method = GET, value = "/validateTokenEditor")
    public boolean validateTokenEditorRest(String token) throws SignatureException, MalformedJwtException {


        try {
            validateToken(token,1);
            return true;
        } catch (SignatureException | MalformedJwtException | IllegalArgumentException e) {
            return false;
        }

    }

    public void validateToken(String token, int userType) throws SignatureException, MalformedJwtException {


        try {
            Jwts.parser().setSigningKey(SECRET_KEYS[userType].getBytes()).parse(token);

        } catch (MalformedJwtException | IllegalArgumentException e) {
            System.out.println("token has WRONG format or is null");
            throw e;
        } catch (SignatureException e){
            System.out.println("token might have right format, but was not authorized");
            throw e;
        }
    }
}