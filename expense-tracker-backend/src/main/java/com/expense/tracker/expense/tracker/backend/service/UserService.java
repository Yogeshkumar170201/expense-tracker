package com.expense.tracker.expense.tracker.backend.service;

import com.expense.tracker.expense.tracker.backend.dao.TransactionDao;
import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.models.TransactionDetails;
import com.expense.tracker.expense.tracker.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private TransactionDao transactionDao;

    public Long getIncomeByEmail(String email) {
        User user = userDao.findByEmail(email).orElse(null);
        if(user!=null){
            return user.getIncome();
        }
        return 0L;
    }

    public Long getExpenseByEmail(String email) {
        User user = userDao.findByEmail(email).orElse(null);
        if(user!=null){
            return user.getExpense();
        }
        return 0L;
    }


    public List<TransactionDetails> findTransactionsByEmail(String email) {
        User user = userDao.findByEmail(email).orElse(null);
        if(user!=null){
            return transactionDao.findByUserId(user.getId());
        }
        return Arrays.asList();
    }
}
