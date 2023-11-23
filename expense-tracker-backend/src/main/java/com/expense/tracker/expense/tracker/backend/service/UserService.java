package com.expense.tracker.expense.tracker.backend.service;

import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public Long getIncomeByEmail(String email) {
        User user = userDao.findByEmail(email).orElse(null);
        if(user!=null){
            return user.getIncome();
        }
        return -1L;
    }

    public Long getExpenseByEmail(String email) {
        User user = userDao.findByEmail(email).orElse(null);
        if(user!=null){
            return user.getExpense();
        }
        return -1L;
    }
}
