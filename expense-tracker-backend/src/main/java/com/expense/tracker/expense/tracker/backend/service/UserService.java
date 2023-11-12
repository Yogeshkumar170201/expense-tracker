package com.expense.tracker.expense.tracker.backend.service;

import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.dto.UserDTO;
import com.expense.tracker.expense.tracker.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public void saveUser(UserDTO userDTO) {

        if(userDTO==null || userDTO.getId()<=0 ||
                userDTO.getName()==null || userDTO.getName().isEmpty() ||
                userDTO.getEmail()==null || userDTO.getEmail().isEmpty() ||
                userDTO.getEmail().matches("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$") ||
                userDTO.getPassword()==null || userDTO.getPassword().isEmpty() || userDTO.getPassword().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*()_\\-+=])(?=\\\\S+$).{6,}$")){
            throw new RuntimeException("Invalid User");
        }

        User user = User.builder()
                .id(userDTO.getId())
                .email(userDTO.getEmail())
                .name(userDTO.getName())
                .password(userDTO.getPassword())
                .isEnabled(userDTO.isEnabled())
                .build();
        userDao.save(user);
    }
}
