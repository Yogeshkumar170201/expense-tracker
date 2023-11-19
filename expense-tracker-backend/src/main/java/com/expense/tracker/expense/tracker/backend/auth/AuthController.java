package com.expense.tracker.expense.tracker.backend.auth;

import com.expense.tracker.expense.tracker.backend.dao.UserDao;
import com.expense.tracker.expense.tracker.backend.events.RegistrationEvent;
import com.expense.tracker.expense.tracker.backend.models.User;
import com.expense.tracker.expense.tracker.backend.service.AuthenticationService;
import com.expense.tracker.expense.tracker.backend.service.RegistrationVerificationService;
import com.expense.tracker.expense.tracker.backend.utils.Response;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;

    private final ApplicationEventPublisher publisher;

    private final UserDao userDao;

    private final RegistrationVerificationService regVerService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<Response> register(
            @RequestBody RegisterRequest request,
            final HttpServletRequest req
            ){
        var res = authenticationService.register(request);
        User user = userDao.findByEmail(request.getEmail()).orElse(null);
        if(user!=null){
            publisher.publishEvent(new RegistrationEvent(
                    user,
                    applicationUrl(req)
            ));
        }
        return ResponseEntity.ok(res);
    }

    private String applicationUrl(HttpServletRequest request) {
        return "http://"+
                request.getServerName()+
                ":"+
                request.getServerPort()+
                "/auth/"+
                request.getContextPath();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticateRequest request
    ){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public String verifyToken(@RequestParam("token") String token){
        String result = regVerService.validateToken(token);
        if(result.equalsIgnoreCase("valid")){
            return "User Verification Successfully";
        }else{
            return "Bad user";
        }
    }

//    @GetMapping("/hello")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public String bye(){
//        return "bye";
//    }

}
