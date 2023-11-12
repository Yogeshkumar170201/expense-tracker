package com.expense.tracker.expense.tracker.backend.webmodules;

import com.expense.tracker.expense.tracker.backend.dto.UserDTO;
import com.expense.tracker.expense.tracker.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserWebModule {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String test(){
        return "test";
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserDTO userDTO){
        try {
            userService.saveUser(userDTO);
            return "User Registration successfull";
        }catch (RuntimeException e){
            return e.getMessage();
        }
    }
}
