package com.expense.tracker.expense.tracker.backend.user;

import com.expense.tracker.expense.tracker.backend.models.TransactionDetails;
import com.expense.tracker.expense.tracker.backend.service.JwtService;
import com.expense.tracker.expense.tracker.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @GetMapping("/income/{token}")
    public Long getIncome(@PathVariable("token")String jwtToken){
        System.out.println(jwtToken);
        String email = jwtService.extractUsername(jwtToken);
        return userService.getIncomeByEmail(email);
    }

    @GetMapping("/expense/{token}")
    public Long getExpense(@PathVariable("token") String jwtToken){
        String email = jwtService.extractUsername(jwtToken);
        return userService.getExpenseByEmail(email);
    }

    @GetMapping("/transactions/{token}")
    public List<TransactionDetails> findTransactionById(@PathVariable("token") String token){
        String email = jwtService.extractUsername(token);
        return userService.findTransactionsByEmail(email);
    }

}
