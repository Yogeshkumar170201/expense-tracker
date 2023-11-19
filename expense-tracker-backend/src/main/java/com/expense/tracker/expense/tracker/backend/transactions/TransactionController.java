package com.expense.tracker.expense.tracker.backend.transactions;

import com.expense.tracker.expense.tracker.backend.service.JwtService;
import com.expense.tracker.expense.tracker.backend.service.TransactionService;
import com.expense.tracker.expense.tracker.backend.utils.Response;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/addIncome")
    public ResponseEntity<Response> addIncome(@RequestBody IncomeRequest incomeRequest, final HttpServletRequest request){
        String jwt = request.getHeader("Authorization").substring(7);
        String email = jwtService.extractUsername(jwt);
        Response res = transactionService.addIncome(incomeRequest, email);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/addExpense")
    public ResponseEntity<Response> addExpense(@RequestBody ExpenseRequest expenseRequest, final HttpServletRequest request){
        String jwt = request.getHeader("Authorization").substring(7);
        String email = jwtService.extractUsername(jwt);
        Response res = transactionService.addExpense(expenseRequest, email);
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/deleteTransaction/{id}")
    public ResponseEntity<Response> deleteTransaction(@PathVariable("id") Long id){
        Response res = transactionService.deleteTransaction(id);
        return ResponseEntity.ok(res);
    }
    
}
