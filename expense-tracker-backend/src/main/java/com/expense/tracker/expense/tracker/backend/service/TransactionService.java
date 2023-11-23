package com.expense.tracker.expense.tracker.backend.service;

import com.expense.tracker.expense.tracker.backend.dao.TransactionDao;
import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.models.Transaction;
import com.expense.tracker.expense.tracker.backend.models.User;
import com.expense.tracker.expense.tracker.backend.transactions.ExpenseRequest;
import com.expense.tracker.expense.tracker.backend.transactions.IncomeRequest;
import com.expense.tracker.expense.tracker.backend.utils.Response;
import com.expense.tracker.expense.tracker.backend.utils.TransactionType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

    @Autowired
    private TransactionDao transactionDao;

    @Autowired
    private UserDao userDao;

    public Response addIncome(IncomeRequest incomeRequest, String email)  {

        User user = userDao.findByEmail(email).orElse(null);
        user.setAmount(incomeRequest.getAmount()+user.getAmount());
        user.setIncome(incomeRequest.getAmount()+user.getIncome());
        Transaction incomeTransaction = Transaction.builder()
                .type(TransactionType.Income)
                .title(incomeRequest.getTitle())
                .amount(incomeRequest.getAmount())
                .dateOfTransaction(incomeRequest.getDateOfIncome())
                .source(incomeRequest.getSource())
                .reference(incomeRequest.getReference())
                .user(user)
                .build();

        userDao.save(user);
        transactionDao.save(incomeTransaction);
        return Response.builder()
                .message("Income is added")
                .build();
    }

    public Response addExpense(ExpenseRequest expenseRequest, String email) {
        User user = userDao.findByEmail(email).orElse(null);
        user.setAmount(user.getAmount()-expenseRequest.getAmount());
        user.setExpense(expenseRequest.getAmount()+user.getExpense());
        Transaction incomeTransaction = Transaction.builder()
                .type(TransactionType.Expense)
                .title(expenseRequest.getTitle())
                .amount(expenseRequest.getAmount())
                .dateOfTransaction(expenseRequest.getDateOfExpense())
                .source(expenseRequest.getSource())
                .reference(expenseRequest.getReference())
                .user(user)
                .build();

        userDao.save(user);
        transactionDao.save(incomeTransaction);
        return Response.builder()
                .message("Expense is added")
                .build();
    }

    public Response deleteTransaction(Long id) {

        if(transactionDao.findById(id).isEmpty()){
            return Response.builder()
                    .message("Transaction doesn't exist")
                    .build();
        }
        transactionDao.deleteById(id);
        return Response.builder()
                .message("Transaction is deleted")
                .build();
    }
}
