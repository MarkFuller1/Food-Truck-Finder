package com.software2.foodtruckfinder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@Controller // This means that this class is a Controller
@RequestMapping(path = "/v/login") // This means URL's start with /demo (after Application path this is assigned to
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/")
    public @ResponseBody
    ResponseEntity<User> validateUser(@RequestBody User loginUser) {

        System.out.println(loginUser.getEmail() + loginUser.getEmail());
        // This returns a JSON or XML with the users
        Iterable<User> users = userRepository.findAll();
        for (User user : users) {
            if (user.getEmail().equals(loginUser.getEmail()) && user.getPassword().equals(loginUser.getPassword())) {
                return ResponseEntity.ok().body(user);
            }
        }
        return ResponseEntity.status(401).build();
    }
}
