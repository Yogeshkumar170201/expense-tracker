package com.expense.tracker.expense.tracker.backend.service;

import com.expense.tracker.expense.tracker.backend.auth.AuthenticateRequest;
import com.expense.tracker.expense.tracker.backend.auth.AuthenticationResponse;
import com.expense.tracker.expense.tracker.backend.auth.RegisterRequest;
import com.expense.tracker.expense.tracker.backend.dao.TokenDao;
import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.models.Token;
import com.expense.tracker.expense.tracker.backend.models.User;
import com.expense.tracker.expense.tracker.backend.utils.Response;
import com.expense.tracker.expense.tracker.backend.utils.Role;
import com.expense.tracker.expense.tracker.backend.utils.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {


    private final UserDao userDao;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final TokenDao tokenDao;

    public Response register(RegisterRequest request) {
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .isEnabled(false)
                .build();
        userDao.save(user);

        return Response.builder()
                .message("User Registration Successfully")
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        User user = userDao.findByEmail(request.getEmail())
                .orElseThrow(()->new UsernameNotFoundException("User not found"));
        String JwtToken = jwtService.generateToken(user);
        Token token = Token.builder()
                .token(JwtToken)
                .tokenType(TokenType.Bearer)
                .expired(false)
                .revoked(false)
                .user(user)
                .build();

        List<Token> tokens = tokenDao.getAllValidTokensByUserId(user.getId());
        tokens.forEach((tkn)->{
            tkn.setExpired(true);
            tkn.setRevoked(true);
        });

        tokenDao.save(token);
        return AuthenticationResponse.builder()
                .token(JwtToken)
                .build();
    }
}
